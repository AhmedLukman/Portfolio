import GradientBorder from '@/components/ui/GradientBorder';
import React from 'react'

const HomeHeader = () => {
  return (
    <header>
      <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
        Ahmed Lukman{" "}
        <span className="purple-gradient-text">| Full Stack Developer</span>
      </h1>
      <GradientBorder className="max-w-2xl mx-auto" />
    </header>
  );
}

export default HomeHeader