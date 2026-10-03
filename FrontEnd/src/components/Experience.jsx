import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Experience({ experience, style }) {
  return (
    <section id="experience" className="py-24 border-t border-zinc-900 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-20 space-y-3">
            <div 
              className="text-xs uppercase font-extrabold tracking-widest" 
              style={{ color: style.primaryColor }}
            >
              Employment History
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-white ${style.headingFont}`}>
              Work Experience
            </h2>
            <p className="text-zinc-400 text-sm font-sans max-w-md mx-auto">
              Detailed accomplishments and infrastructure pipelines managed in professional IT operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute top-4 bottom-4 left-4 lg:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950" />

          <div className="space-y-12 lg:space-y-16">
            {experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node / Dot */}
                  <div 
                    className="absolute left-4 lg:left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full border-4 border-zinc-950 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: style.primaryColor }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Content Column (Half width in desktop) */}
                  <div className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:px-8">
                    <ScrollReveal direction={isEven ? "right" : "left"}>
                      <div className="group relative p-6 sm:p-8 rounded-3xl bg-zinc-900/85 border border-zinc-800/90 shadow-2xl shadow-black/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-700">
                        {/* Accent top border strip */}
                        <div 
                          className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl ${style.primaryBg}`} 
                        />

                        {/* Header details */}
                        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-zinc-800/80">
                          <span className="px-2.5 py-0.5 rounded-full bg-zinc-950 text-zinc-400 text-[10px] font-mono border border-zinc-800 uppercase tracking-wider font-bold">
                            {exp.type}
                          </span>

                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-950/80 text-zinc-400 text-xs font-mono border border-zinc-800/60">
                            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Title and Company */}
                        <div className="mt-4">
                          <h3 className="font-extrabold text-white text-lg sm:text-xl tracking-tight leading-snug">
                            {exp.role}
                          </h3>
                          <p 
                            className="text-sm font-mono font-bold flex items-center gap-1.5 mt-1" 
                            style={{ color: style.primaryColor }}
                          >
                            <Briefcase className="w-4 h-4 shrink-0" />
                            <span>{exp.company}</span>
                          </p>
                        </div>

                        {/* Bullet descriptions */}
                        <div className="space-y-3 pt-5">
                          {exp.bullets.map((bullet, bulletIdx) => (
                            <div key={bulletIdx} className="flex items-start gap-3">
                              <div 
                                className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" 
                                style={{ backgroundColor: style.primaryColor }} 
                              />
                              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                                {bullet}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Empty counterpart space to balance the row on desktop */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}