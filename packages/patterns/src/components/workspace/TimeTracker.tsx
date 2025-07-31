import { Button } from '@wheel/ui';
import { Icon } from '@wheel/ui';
import React, { useEffect, useState } from 'react';
import { Project, Task, TimeEntry, TimeSession } from './types';

export interface TimeTrackerProps {
  currentSession?: TimeSession;
  onSessionStart: (project: Project, task?: Task) => void;
  onSessionStop: () => void;
  onSessionPause: () => void;
  onTimeEntry: (entry: TimeEntry) => void;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  projects: Project[];
  tasks: Task[];
  showTimer?: boolean;
  showHistory?: boolean;
  autoSave?: boolean;
}

export const TimeTracker: React.FC<TimeTrackerProps> = ({
  onSessionStart,
  onSessionStop,
  onSessionPause,
  onTimeEntry,
  projects,
  showHistory = false,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout> | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      if (interval) {
        clearInterval(interval);
      }
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
    setStartTime(new Date());
    onSessionStart(projects[0]);
  };

  const validateTimeEntry = (entry: TimeEntry) => {
    if (entry.endTime.getTime() - entry.startTime.getTime() < 1000) {
      return false;
    }
    return true;
  };

  const handleStop = () => {
    setIsRunning(false);
    if (startTime) {
      const entry: TimeEntry = {
        id: new Date().toISOString(),
        startTime,
        endTime: new Date(),
        project: projects[0],
      };
      if (validateTimeEntry(entry)) {
        onTimeEntry(entry);
        setTimeEntries((prev) => [entry, ...prev]);
      } else {
        alert('Invalid time entry');
      }
    }
    onSessionStop();
  };

  const handlePause = () => {
    setIsRunning(false);
    onSessionPause();
  };

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center space-x-2">
      <div>{formatTime(time)}</div>
      {!isRunning ? (
        <Button onClick={handleStart}>
          <Icon name="Play" />
        </Button>
      ) : (
        <>
          <Button onClick={handlePause}>
            <Icon name="Pause" />
          </Button>
          <Button onClick={handleStop}>
            <Icon name="Square" />
          </Button>
        </>
      )}
      {showHistory && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Time Entries</h3>
          <ul>
            {timeEntries.map((entry) => (
              <li key={entry.id}>
                {entry.project.name}: {formatTime(Math.floor((entry.endTime.getTime() - entry.startTime.getTime()) / 1000))}
              </li>
            ))}
          </ul>
          <Button onClick={() => alert('Exporting time entries...')}>Export</Button>
        </div>
      )}
    </div>
  );
};
