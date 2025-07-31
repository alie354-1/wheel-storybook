import { supabase } from '../supabase';
import { v4 as uuidv4 } from 'uuid';

/**
 * Logging Service Interface
 */
export interface LoggingService {
  trace: (message: string, context?: any) => Promise<void>;
  debug: (message: string, context?: any) => Promise<void>;
  info: (message: string, context?: any) => Promise<void>;
  warn: (message: string, context?: any) => Promise<void>;
  error: (message: string, error?: Error, context?: any) => Promise<void>;
  fatal: (message: string, error?: Error, context?: any) => Promise<void>;

  logEvent: (eventType: string | any, data?: any) => Promise<void>;
  startSession: (userId?: string, companyId?: string) => Promise<string>;
  endSession: (sessionId?: string) => Promise<void>;
  logNavigation: (path: string, referrer?: string) => Promise<void>;
  logInteraction: (elementId: string, action: string, data?: any) => Promise<void>;
  logPerformance: (metric: string, value: number, context?: any) => Promise<void>;
  getSessionId: () => string | null;

  logSystemEvent: (category: string, source: string, action: string, data?: any) => Promise<void>;
  logUserAction: (action: string, component: string, data?: any, metadata?: any) => Promise<string>;
  logAIInteraction: (action: string, data?: any, metadata?: any) => Promise<string>;
}

/**
 * Supabase-backed implementation of Logging Service
 */
class SupabaseLoggingService implements LoggingService {
  private sessionId: string | null = null;

  constructor() {
    console.log('[LoggingService] Initialized in ENABLED mode');
  }

  private async log(level: string, message: string, context: any = {}) {
    if (!this.sessionId) {
      console.warn('[LoggingService] No active session. Log will be missing session_id.');
    }
    try {
      const { error } = await supabase.from('logs').insert({
        level,
        message,
        context,
        session_id: this.sessionId,
      });
      if (error) {
        // Do not log the error to the console
      }
    } catch (err) {
      // Do not log the error to the console
    }
  }

  async trace(message: string, context: any = {}): Promise<void> {
    await this.log('trace', message, context);
  }

  async debug(message: string, context: any = {}): Promise<void> {
    await this.log('debug', message, context);
  }

  async info(message: string, context: any = {}): Promise<void> {
    await this.log('info', message, context);
  }

  async warn(message: string, context: any = {}): Promise<void> {
    await this.log('warn', message, context);
  }

  async error(message: string, error?: Error, context: any = {}): Promise<void> {
    const errorContext = {
      ...context,
      errorMessage: error?.message,
      errorStack: error?.stack,
    };
    await this.log('error', message, errorContext);
  }

  async fatal(message: string, error?: Error, context: any = {}): Promise<void> {
    const errorContext = {
      ...context,
      errorMessage: error?.message,
      errorStack: error?.stack,
    };
    await this.log('fatal', message, errorContext);
  }

  async logEvent(eventType: string | any, data: any = {}): Promise<void> {
    const event = typeof eventType === 'string' ? { event_type: eventType, ...data } : eventType;
    await this.log('info', `Event: ${event.event_type}`, event);
  }

  async startSession(userId?: string, companyId?: string): Promise<string> {
    this.sessionId = uuidv4();
    console.log(`[LoggingService] Session started: ${this.sessionId}`);
    await this.log('info', 'Session started', { userId, companyId });
    return this.sessionId;
  }

  async endSession(sessionId?: string): Promise<void> {
    const id = sessionId || this.sessionId;
    console.log(`[LoggingService] Session ended: ${id}`);
    await this.log('info', 'Session ended', { sessionId: id });
    this.sessionId = null;
  }

  async logNavigation(path: string, referrer: string = 'unknown'): Promise<void> {
    await this.log('info', `Navigation to ${path}`, { path, referrer });
  }

  async logInteraction(elementId: string, action: string, data: any = {}): Promise<void> {
    await this.log('info', `Interaction: ${action} on ${elementId}`, { elementId, action, data });
  }

  async logPerformance(metric: string, value: number, context: any = {}): Promise<void> {
    await this.log('info', `Performance: ${metric}`, { metric, value, ...context });
  }

  getSessionId(): string | null {
    return this.sessionId;
  }

  async logSystemEvent(category: string, source: string, action: string, data: any = {}): Promise<void> {
    await this.log('info', `System Event: ${category}.${action}`, { category, source, action, data });
  }

  async logUserAction(action: string, component: string, data: any = {}, metadata: any = {}): Promise<string> {
    const eventId = uuidv4();
    await this.log('info', `User Action: ${action} in ${component}`, { eventId, action, component, data, metadata });
    return eventId;
  }

  async logAIInteraction(action: string, data: any = {}, metadata: any = {}): Promise<string> {
    const eventId = uuidv4();
    await this.log('info', `AI Interaction: ${action}`, { eventId, action, data, metadata });
    return eventId;
  }
}

// Export singleton instance
export const loggingService = new SupabaseLoggingService();
