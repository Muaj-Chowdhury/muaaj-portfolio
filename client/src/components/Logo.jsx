import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* This is the optimized SVG as a Component.
        It is fully responsive and uses your brand colors.
      */}
      <svg width="150" height="50" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="block dark:hidden">
        {/* LIGHT MODE VERSION (Using exact colors from your CSS) */}
        <path d="M 20,25 C 60,10, 120,10, 160,25" stroke="#436850" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/>
        <text x="50%" y="50" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="34" fill="#12372A">MUAAJ</text>
        <g transform="translate(68, 30)">
          <path d="M 5,20 L 25,5 L 45,20" stroke="#ADBC9F" stroke-width="1"/>
          <circle cx="5" cy="20" r="3.5" fill="#22D3EE"/>
          <circle cx="25" cy="5" r="3.5" fill="#84CC16"/>
          <circle cx="45" cy="20" r="3.5" fill="#FBBF24"/>
        </g>
      </svg>

      <svg width="150" height="50" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden dark:block">
        {/* DARK MODE VERSION (Using inverted cream/sage) */}
        <path d="M 20,25 C 60,10, 120,10, 160,25" stroke="#ADBC9F" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/>
        <text x="50%" y="50" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="34" fill="#FBFADA">MUAAJ</text>
        <g transform="translate(68, 30)">
          <path d="M 5,20 L 25,5 L 45,20" stroke="#FBFADA" stroke-width="1"/>
          <circle cx="5" cy="20" r="3.5" fill="#22D3EE"/>
          <circle cx="25" cy="5" r="3.5" fill="#84CC16"/>
          <circle cx="45" cy="20" r="3.5" fill="#FBBF24"/>
        </g>
      </svg>

      {/* Optionally, add your role next to the logo for clarity */}
      <span className="text-sm font-medium text-muted-foreground hidden lg:block border-l pl-3 border-border">
        MERN Developer | BBA
      </span>
    </div>
  );
};

export default Logo;