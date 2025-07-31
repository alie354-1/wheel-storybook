import { cn } from '@wheel/shared';
import {
  Alert,
  Badge,
  Button,
  Card,
  Icon,
  Input,
  Progress
} from '@wheel/ui';
import React, { useCallback, useMemo, useState } from 'react';

// Helper functions (would normally be imported from @wheel/shared)
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

const formatFileSize = (bytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(1)} ${units[unitIndex]}`;
};

// Types
export interface Archive {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  size: number;
  type: 'full' | 'incremental';
  status: 'active' | 'archived' | 'deleted';
  retentionPolicy: RetentionPolicy;
  encryption: boolean;
  workspaceId: string;
  createdBy: string;
  expiresAt?: Date;
  metadata?: Record<string, any>;
}

export interface RetentionPolicy {
  id: string;
  name: string;
  description: string;
  retentionPeriod: number; // days
  autoDelete: boolean;
  compressionEnabled: boolean;
  encryptionRequired: boolean;
  workspaceTypes: string[];
  category: 'legal' | 'business' | 'technical' | 'compliance';
}

export interface ArchiveData {
  name: string;
  description: string;
  type: 'full' | 'incremental';
  retentionPolicyId: string;
  includeFiles: boolean;
  includeMessages: boolean;
  includeProjects: boolean;
  includeUsers: boolean;
}

export interface WorkspaceArchiveProps {
  workspace: {
    id: string;
    name: string;
    type: string;
  };
  archives: Archive[];
  policies: RetentionPolicy[];
  onArchiveCreate?: (data: ArchiveData) => void;
  onArchiveRestore?: (archive: Archive) => void;
  onArchiveDelete?: (archive: Archive) => void;
  onPolicyUpdate?: (policy: RetentionPolicy) => void;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showPolicies?: boolean;
  showCompliance?: boolean;
  permissions?: string[];
  className?: string;
}

const WorkspaceArchive: React.FC<WorkspaceArchiveProps> = ({
  workspace,
  archives,
  policies,
  onArchiveCreate,
  onArchiveRestore,
  onArchiveDelete,
  onPolicyUpdate,
  context = 'neutral',
  showPolicies = true,
  showCompliance = true,
  permissions = [],
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<'archives' | 'policies' | 'compliance'>('archives');
  const [selectedArchive, setSelectedArchive] = useState<Archive | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [archiveFilter, setArchiveFilter] = useState<'all' | 'active' | 'archived' | 'deleted'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'size'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Permission checks
  const canCreateArchive = permissions.includes('archive:create') || context === 'admin';
  const canRestoreArchive = permissions.includes('archive:restore') || context === 'admin';
  const canDeleteArchive = permissions.includes('archive:delete') || context === 'admin';
  const canManagePolicies = permissions.includes('archive:manage_policies') || context === 'admin';

  // Filter and sort archives
  const filteredArchives = useMemo(() => {
    let filtered = archives.filter(archive => {
      // Filter by status
      if (archiveFilter !== 'all' && archive.status !== archiveFilter) {
        return false;
      }

      // Filter by search query
      if (searchQuery && !archive.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !archive.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });

    // Sort archives
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'date':
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
        case 'size':
          comparison = a.size - b.size;
          break;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [archives, archiveFilter, searchQuery, sortBy, sortOrder]);

  // Get status badge variant
  const getStatusBadge = (status: Archive['status']) => {
    switch (status) {
      case 'active':
        return { variant: 'success' as const, label: 'Active' };
      case 'archived':
        return { variant: 'secondary' as const, label: 'Archived' };
      case 'deleted':
        return { variant: 'error' as const, label: 'Deleted' };
      default:
        return { variant: 'secondary' as const, label: status };
    }
  };

  // Get type badge variant
  const getTypeBadge = (type: Archive['type']) => {
    switch (type) {
      case 'full':
        return { variant: 'primary' as const, label: 'Full Backup' };
      case 'incremental':
        return { variant: 'secondary' as const, label: 'Incremental' };
      default:
        return { variant: 'secondary' as const, label: type };
    }
  };

  // Calculate compliance status
  const complianceStatus = useMemo(() => {
    const totalArchives = archives.length;
    const compliantArchives = archives.filter(archive => {
      const policy = policies.find(p => p.id === archive.retentionPolicy.id);
      if (!policy) return false;

      const daysSinceCreation = Math.floor(
        (Date.now() - new Date(archive.createdAt).getTime()) / (1000 * 60 * 60 * 24)
      );

      return daysSinceCreation <= policy.retentionPeriod;
    }).length;

    return {
      total: totalArchives,
      compliant: compliantArchives,
      percentage: totalArchives > 0 ? Math.round((compliantArchives / totalArchives) * 100) : 100
    };
  }, [archives, policies]);

  const handleCreateArchive = useCallback((data: ArchiveData) => {
    onArchiveCreate?.(data);
    setShowCreateModal(false);
  }, [onArchiveCreate]);

  const handleRestoreArchive = useCallback((archive: Archive) => {
    onArchiveRestore?.(archive);
    setShowRestoreModal(false);
    setSelectedArchive(null);
  }, [onArchiveRestore]);

  const handleDeleteArchive = useCallback((archive: Archive) => {
    if (window.confirm(`Are you sure you want to delete archive "${archive.name}"? This action cannot be undone.`)) {
      onArchiveDelete?.(archive);
      setSelectedArchive(null);
    }
  }, [onArchiveDelete]);

  return (
    <div className={cn('workspace-archive', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Archive Management
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Manage data archival and retention for {workspace.name}
          </p>
        </div>

        {canCreateArchive && (
          <Button
            variant="outline"
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2"
          >
            <Icon name="Archive" size="sm" />
            Create Archive
          </Button>
        )}
      </div>

      {/* Simple Tab Implementation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('archives')}
            className={cn(
              'py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2',
              activeTab === 'archives'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
          >
            <Icon name="Archive" size="sm" />
            Archives ({archives.length})
          </button>

          {showPolicies && (
            <button
              onClick={() => setActiveTab('policies')}
              className={cn(
                'py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2',
                activeTab === 'policies'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              <Icon name="FileText" size="sm" />
              Policies ({policies.length})
            </button>
          )}

          {showCompliance && (
            <button
              onClick={() => setActiveTab('compliance')}
              className={cn(
                'py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2',
                activeTab === 'compliance'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              <Icon name="ShieldCheck" size="sm" />
              Compliance ({complianceStatus.percentage}%)
            </button>
          )}
        </nav>
      </div>

      {/* Archives Tab */}
      {activeTab === 'archives' && (
        <div className="space-y-4">
          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <Input
                name="search"
                placeholder="Search archives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="sm:max-w-xs"
              />

              <select
                value={archiveFilter}
                onChange={(e) => setArchiveFilter(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">All Archives</option>
                <option value="active">Active</option>
                <option value="archived">Archived</option>
                <option value="deleted">Deleted</option>
              </select>
            </div>

            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="date">Sort by Date</option>
                <option value="name">Sort by Name</option>
                <option value="size">Sort by Size</option>
              </select>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              >
                <Icon name={sortOrder === 'asc' ? 'ArrowUp' : 'ArrowDown'} size="sm" />
              </Button>
            </div>
          </div>

          {/* Archives List */}
          <div className="grid gap-4">
            {filteredArchives.length === 0 ? (
              <Card className="p-8 text-center">
                <Icon name="Archive" size="lg" className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No archives found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {searchQuery || archiveFilter !== 'all'
                    ? 'Try adjusting your search or filters'
                    : 'Create your first archive to get started'
                  }
                </p>
                {canCreateArchive && !searchQuery && archiveFilter === 'all' && (
                  <Button variant="outline" onClick={() => setShowCreateModal(true)}>
                    Create Archive
                  </Button>
                )}
              </Card>
            ) : (
              filteredArchives.map((archive) => {
                const statusBadge = getStatusBadge(archive.status);
                const typeBadge = getTypeBadge(archive.type);
                const policy = policies.find(p => p.id === archive.retentionPolicy.id);

                return (
                  <Card key={archive.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {archive.name}
                          </h3>
                          <Badge variant={statusBadge.variant}>
                            {statusBadge.label}
                          </Badge>
                          <Badge variant={typeBadge.variant}>
                            {typeBadge.label}
                          </Badge>
                          {archive.encryption && (
                            <Badge variant="info">
                              <Icon name="Lock" size="xs" />
                              Encrypted
                            </Badge>
                          )}
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {archive.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500 dark:text-gray-400">Created:</span>
                            <div className="font-medium">
                              {formatDate(archive.createdAt)}
                            </div>
                          </div>

                          <div>
                            <span className="text-gray-500 dark:text-gray-400">Size:</span>
                            <div className="font-medium">
                              {formatFileSize(archive.size)}
                            </div>
                          </div>

                          <div>
                            <span className="text-gray-500 dark:text-gray-400">Policy:</span>
                            <div className="font-medium">
                              {policy?.name || 'Unknown'}
                            </div>
                          </div>

                          {archive.expiresAt && (
                            <div>
                              <span className="text-gray-500 dark:text-gray-400">Expires:</span>
                              <div className="font-medium">
                                {formatDate(archive.expiresAt)}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2 ml-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedArchive(archive)}
                        >
                          <Icon name="Eye" size="sm" />
                          View
                        </Button>

                        {canRestoreArchive && archive.status === 'archived' && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedArchive(archive);
                              setShowRestoreModal(true);
                            }}
                          >
                            <Icon name="RefreshCw" size="sm" />
                            Restore
                          </Button>
                        )}

                        {canDeleteArchive && archive.status !== 'deleted' && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteArchive(archive)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Icon name="Trash2" size="sm" />
                            Delete
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Policies Tab */}
      {activeTab === 'policies' && showPolicies && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Retention Policies
            </h3>
            {canManagePolicies && (
              <Button variant="outline" size="sm">
                <Icon name="Plus" size="sm" />
                Add Policy
              </Button>
            )}
          </div>

          <div className="grid gap-4">
            {policies.map((policy) => (
              <Card key={policy.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {policy.name}
                      </h4>
                      <Badge variant="secondary">
                        {policy.category}
                      </Badge>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {policy.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Retention:</span>
                        <div className="font-medium">
                          {policy.retentionPeriod} days
                        </div>
                      </div>

                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Auto Delete:</span>
                        <div className="font-medium">
                          {policy.autoDelete ? 'Enabled' : 'Disabled'}
                        </div>
                      </div>

                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Compression:</span>
                        <div className="font-medium">
                          {policy.compressionEnabled ? 'Enabled' : 'Disabled'}
                        </div>
                      </div>

                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Encryption:</span>
                        <div className="font-medium">
                          {policy.encryptionRequired ? 'Required' : 'Optional'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {canManagePolicies && (
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onPolicyUpdate?.(policy)}
                      >
                        <Icon name="Edit" size="sm" />
                        Edit
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Compliance Tab */}
      {activeTab === 'compliance' && showCompliance && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Compliance Overview
            </h3>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Overall Compliance Score
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {complianceStatus.compliant} of {complianceStatus.total} archives compliant
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {complianceStatus.percentage}%
                  </div>
                </div>
              </div>

              <Progress
                value={complianceStatus.percentage}
                className="mb-4"
              />

              {complianceStatus.percentage < 100 && (
                <Alert variant="warning">
                  <Icon name="AlertTriangle" size="sm" />
                  Some archives may not be compliant with retention policies.
                  Review and update as needed.
                </Alert>
              )}
            </Card>
          </div>

          {/* Policy Compliance Breakdown */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Policy Compliance Breakdown
            </h4>

            <div className="grid gap-4">
              {policies.map((policy) => {
                const policyArchives = archives.filter(a => a.retentionPolicy.id === policy.id);
                const compliantCount = policyArchives.filter(archive => {
                  const daysSinceCreation = Math.floor(
                    (Date.now() - new Date(archive.createdAt).getTime()) / (1000 * 60 * 60 * 24)
                  );
                  return daysSinceCreation <= policy.retentionPeriod;
                }).length;

                const complianceRate = policyArchives.length > 0
                  ? Math.round((compliantCount / policyArchives.length) * 100)
                  : 100;

                return (
                  <Card key={policy.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          {policy.name}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {compliantCount} of {policyArchives.length} archives compliant
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          {complianceRate}%
                        </div>
                        <Badge
                          variant={complianceRate >= 90 ? 'success' :
                                  complianceRate >= 70 ? 'warning' : 'error'}
                        >
                          {complianceRate >= 90 ? 'Compliant' :
                           complianceRate >= 70 ? 'Warning' : 'Non-compliant'}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Modals would go here - simplified for now */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-medium mb-4">Create Archive</h3>
            <p className="text-gray-600 mb-4">Archive creation modal would go here.</p>
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setShowCreateModal(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowCreateModal(false)}>
                Create
              </Button>
            </div>
          </Card>
        </div>
      )}

      {showRestoreModal && selectedArchive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-medium mb-4">Restore Archive</h3>
            <Alert variant="warning" className="mb-4">
              <Icon name="AlertTriangle" size="sm" />
              Restoring an archive will overwrite current workspace data. This action cannot be undone.
            </Alert>
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => {
                setShowRestoreModal(false);
                setSelectedArchive(null);
              }}>
                Cancel
              </Button>
              <Button onClick={() => handleRestoreArchive(selectedArchive)}>
                Restore Archive
              </Button>
            </div>
          </Card>
        </div>
      )}

      {selectedArchive && !showRestoreModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Archive Details</h3>
              <Button variant="ghost" size="sm" onClick={() => setSelectedArchive(null)}>
                <Icon name="X" size="sm" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Basic Information
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Name:</span>
                    <div className="font-medium">{selectedArchive.name}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span>
                    <div className="font-medium">{selectedArchive.type}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <div className="font-medium">{selectedArchive.status}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Size:</span>
                    <div className="font-medium">{formatFileSize(selectedArchive.size)}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WorkspaceArchive;
