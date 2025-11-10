import React from "react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          {[...Array(totalSteps)].map((_, i) => {
            const step = i + 1;
            const isActive = currentStep === step;
            const isCompleted = currentStep > step;
            return (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-all ${
                  isCompleted
                    ? "bg-emerald-500 text-white"
                    : isActive
                    ? "bg-cyan-500 text-white"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                {step}
              </div>
            );
          })}
        </div>
        <div className="text-sm text-gray-400">
          Step <span>{currentStep}</span> of {totalSteps}
        </div>
      </div>
      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default StepIndicator;
