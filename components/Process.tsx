
import React from 'react';
import { processSteps } from '../constants/data';
import AnimatedSection from './AnimatedSection';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-widest">Our Process</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-20">FROM CONCEPT TO CREATION</h2>
        </AnimatedSection>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-4">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.name}>
              <AnimatedSection className="flex flex-col items-center w-full md:w-1/6" style={{transitionDelay: `${index * 150}ms`}}>
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-gold flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-brand-blue" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-brand-blue mb-2">{step.name}</h3>
                <p className="text-gray-600 text-sm leading-tight px-2">{step.description}</p>
              </AnimatedSection>
              {index < processSteps.length - 1 && (
                 <div className="hidden md:block process-line"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
