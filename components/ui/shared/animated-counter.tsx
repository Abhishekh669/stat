'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ({ num , prefix, label }: { num: number, prefix ?: string, label : string }) => {
  return (
    <div className="w-full h-16  text-primary font-bold text-3xl">
      <CountUp 
        decimals={2}
        decimal=","
        prefix={prefix || ""}
        suffix='+'
        end={num} 
      />
<p className="text-muted-foreground text-[14px]">{label}</p>

    </div>
  )
}

export default AnimatedCounter