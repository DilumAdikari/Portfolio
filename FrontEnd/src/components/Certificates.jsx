import React from 'react';
import * as Lucide from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Certificates({ certificates, style }) {
  const AwardIcon = Lucide.Award || Lucide.Menu;
  const ExternalLinkIcon = Lucide.ExternalLink || Lucide.Menu;

  return (
    <section id="certificates" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 bg-transparent border-t border-zinc-900">
      <ScrollReveal direction="up">
        <div className="mb-16 font-sans text-left">
          <div className="text-xs uppercase font-extrabold tracking-widest" style={{ color: style.primaryColor }}>
            Credentials & Achievements
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-white ${style.headingFont} mt-3`}>
            Licenses & Certifications
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-3">
            Verified professional credentials and academic course completions.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <ScrollReveal 
            key={cert.id} 
            direction={idx % 3 === 0 ? "left" : idx % 3 === 1 ? "up" : "right"} 
            delay={idx * 150}
          >
            <div className="group bg-zinc-900/80 border border-zinc-800/80 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/40 transition-all duration-300 flex flex-col h-full relative backdrop-blur-sm">
              <div className={`h-1.5 ${style.primaryBg}`} />
              
              {/* Certificate Image Container */}
              <div className="aspect-video w-full overflow-hidden border-b border-zinc-800/80 bg-zinc-950 flex items-center justify-center p-2 relative">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-600 text-xs font-mono">
                    Certificate Preview
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-[9px] font-mono uppercase font-bold text-zinc-400 tracking-wider">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100 mb-1">{cert.title}</h3>
                  <p className="text-xs font-mono font-bold mb-3 flex items-center gap-1" style={{ color: style.primaryColor }}>
                    <AwardIcon className="w-3.5 h-3.5" /> {cert.issuer}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">{cert.description}</p>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <a 
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`w-full py-2.5 rounded-xl ${style.buttonPrimary} transition-all flex items-center justify-center gap-1.5 text-xs font-semibold`}
                  >
                    View Credential <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}