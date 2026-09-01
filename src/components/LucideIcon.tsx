import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 24, ...props }: LucideIconProps) {
  // Safe mapping of names to actual components
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Return a default fallback icon if the specified name is not found
    const Fallback = Icons.HelpCircle;
    return <Fallback className={className} size={size} {...props} />;
  }

  return <IconComponent className={className} size={size} {...props} />;
}
