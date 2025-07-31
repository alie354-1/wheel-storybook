import React from "react";

type Priority = "high" | "medium" | "low";

interface PriorityBadgeProps {
  priority: Priority;
  label?: string;
}

export function PriorityBadge({ priority, label }: PriorityBadgeProps) {
  const base = "text-xs px-2 py-1 rounded-full font-medium";
  const styles = {
    high: "bg-red-50 text-red-600 border border-red-200",
    medium: "bg-yellow-50 text-yellow-600 border border-yellow-200",
    low: "bg-blue-50 text-blue-600 border border-blue-200"
  };

  return (
    <span className={`${base} ${styles[priority]}`}>
      {label || (priority === "high" ? "High" : priority === "medium" ? "Medium" : "Low")}
    </span>
  );
}
