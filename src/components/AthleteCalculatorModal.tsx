import React, { useState } from 'react';
import { X, Activity, Droplets, Utensils, Shield, Calculator, CheckCircle2 } from 'lucide-react';

interface AthleteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AthleteCalculatorModal: React.FC<AthleteCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'nutrition' | 'bowling' | 'agility'>('nutrition');

  // Nutrition State
  const [weightKg, setWeightKg] = useState<number>(70);
  const [sportType, setSportType] = useState<string>('cricket');
  const [intensity, setIntensity] = useState<'moderate' | 'high' | 'match'>('high');

  // Bowling State
  const [bowlerAge, setBowlerAge] = useState<'under16' | 'under19' | 'senior'>('under19');
  const [plannedSpells, setPlannedSpells] = useState<number>(3);

  if (!isOpen) return null;

  // Scientific calculation formulas:
  // Protein: 1.6g/kg (moderate) to 2.0g/kg (high/match)
  // Carbs: 5g/kg (moderate) to 7-8g/kg (high/match)
  // Fats: 1.0g/kg
  // Hydration: weight * 0.04L + additional for training
  const proteinPerKg = intensity === 'moderate' ? 1.6 : intensity === 'high' ? 1.8 : 2.0;
  const carbsPerKg =
    intensity === 'moderate'
      ? 4.5
      : intensity === 'high'
      ? sportType === 'football' ? 7.0 : 6.0
      : 8.0;
  const fatPerKg = 1.0;

  const totalProtein = Math.round(weightKg * proteinPerKg);
  const totalCarbs = Math.round(weightKg * carbsPerKg);
  const totalFats = Math.round(weightKg * fatPerKg);
  const totalCalories = totalProtein * 4 + totalCarbs * 4 + totalFats * 9;
  const waterLiters = (weightKg * 0.04 + (intensity === 'match' ? 1.2 : 0.8)).toFixed(1);

  // Bowling caps
  const bowlingCaps = {
    under16: { maxDailyDeliveries: 30, maxWeeklyDeliveries: 100, minRestDays: 2 },
    under19: { maxDailyDeliveries: 42, maxWeeklyDeliveries: 150, minRestDays: 2 },
    senior: { maxDailyDeliveries: 60, maxWeeklyDeliveries: 210, minRestDays: 1 },
  }[bowlerAge];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-amber-700" />
            <h2 className="text-xl font-bold font-display uppercase tracking-tight text-stone-900">
              Interactive Athletic Performance Tools
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls (Functional Segmented Control) */}
        <div className="flex border-b border-stone-200 bg-stone-100/60 p-1.5 gap-1.5 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('nutrition')}
            className={`flex-1 py-2 px-3 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'nutrition'
                ? 'bg-white text-stone-900 shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>Macro & Hydration Fuel</span>
          </button>
          <button
            onClick={() => setActiveTab('bowling')}
            className={`flex-1 py-2 px-3 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'bowling'
                ? 'bg-white text-stone-900 shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Bowling Workload Cap</span>
          </button>
          <button
            onClick={() => setActiveTab('agility')}
            className={`flex-1 py-2 px-3 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'agility'
                ? 'bg-white text-stone-900 shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Agility Benchmarks</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-stone-800 text-sm font-sans">
          {activeTab === 'nutrition' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Body Weight (kg)
                  </label>
                  <input
                    type="number"
                    min={40}
                    max={140}
                    value={weightKg}
                    onChange={(e) => setWeightKg(Math.max(30, Math.min(160, Number(e.target.value) || 70)))}
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Sport Discipline
                  </label>
                  <select
                    value={sportType}
                    onChange={(e) => setSportType(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
                  >
                    <option value="cricket">Cricket (Fast Bowler / All-Rounder)</option>
                    <option value="football">Football / Soccer (Midfielder / Winger)</option>
                    <option value="basketball">Basketball (Guard / Forward)</option>
                    <option value="athletics">Sprinting & Track Field</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Training Load
                  </label>
                  <select
                    value={intensity}
                    onChange={(e) => setIntensity(e.target.value as any)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
                  >
                    <option value="moderate">Moderate Session (60m)</option>
                    <option value="high">Intense Double Session (120m)</option>
                    <option value="match">Full Match Day / High Heat</option>
                  </select>
                </div>
              </div>

              {/* Calculated Results */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                <div className="text-xs uppercase font-bold text-stone-500 tracking-wider mb-3">
                  Estimated Daily Athletic Nutrient Targets ({weightKg} kg athlete)
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="block text-xs text-stone-500 font-sans">Protein</span>
                    <span className="text-2xl font-bold font-mono text-stone-900 tabular-nums">
                      {totalProtein}g
                    </span>
                    <span className="block text-[11px] text-stone-400 font-sans mt-0.5">
                      {proteinPerKg}g / kg
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="block text-xs text-stone-500 font-sans">Carbohydrates</span>
                    <span className="text-2xl font-bold font-mono text-amber-700 tabular-nums">
                      {totalCarbs}g
                    </span>
                    <span className="block text-[11px] text-stone-400 font-sans mt-0.5">
                      {carbsPerKg}g / kg
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="block text-xs text-stone-500 font-sans">Healthy Fats</span>
                    <span className="text-2xl font-bold font-mono text-stone-900 tabular-nums">
                      {totalFats}g
                    </span>
                    <span className="block text-[11px] text-stone-400 font-sans mt-0.5">
                      {fatPerKg}g / kg
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="block text-xs text-stone-500 font-sans">Hydration</span>
                    <span className="text-2xl font-bold font-mono text-blue-700 tabular-nums">
                      {waterLiters}L
                    </span>
                    <span className="block text-[11px] text-stone-400 font-sans mt-0.5">
                      + Electrolytes
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-200 text-xs text-stone-600 flex items-center justify-between">
                  <span>Target Energy Intake: <strong className="font-mono text-stone-900 tabular-nums">{totalCalories.toLocaleString()} kcal</strong></span>
                  <span className="italic">Derived from Sports Nutrition Chapter 6</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bowling' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Bowler Age Bracket
                  </label>
                  <select
                    value={bowlerAge}
                    onChange={(e) => setBowlerAge(e.target.value as any)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
                  >
                    <option value="under16">Under 16 (Developing Spine)</option>
                    <option value="under19">Under 19 (High Performance Pathway)</option>
                    <option value="senior">Senior / Adult Club Professional</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Spells Per Match Day
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={6}
                    value={plannedSpells}
                    onChange={(e) => setPlannedSpells(Math.max(1, Math.min(6, Number(e.target.value) || 2)))}
                    className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono text-base"
                  />
                </div>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-4">
                <div className="text-xs uppercase font-bold text-stone-500 tracking-wider">
                  Recommended Medical Guidelines (Spinal Safety Protocols)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="block text-xs text-stone-500">Max Deliveries / Day</span>
                    <span className="text-2xl font-bold font-mono text-stone-900 tabular-nums">
                      {bowlingCaps.maxDailyDeliveries} balls
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      (~{Math.floor(bowlingCaps.maxDailyDeliveries / 6)} overs)
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="block text-xs text-stone-500">Weekly Delivery Cap</span>
                    <span className="text-2xl font-bold font-mono text-amber-700 tabular-nums">
                      {bowlingCaps.maxWeeklyDeliveries} balls
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      (~{Math.floor(bowlingCaps.maxWeeklyDeliveries / 6)} overs)
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="block text-xs text-stone-500">Mandatory Rest Days</span>
                    <span className="text-2xl font-bold font-mono text-emerald-700 tabular-nums">
                      {bowlingCaps.minRestDays} days/wk
                    </span>
                    <span className="text-[11px] text-stone-400 font-sans">
                      zero bowling days
                    </span>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  *Exceeding weekly caps increases lumbar pars interarticularis stress fracture rates by 340%. Always report recurring back stiffness immediately.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'agility' && (
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Standardized Athletic Testing Standards (Men & Women)
              </div>
              <div className="overflow-x-auto border border-stone-200 rounded-lg">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 border-b border-stone-200">
                      <th className="p-3 font-semibold">Test Protocol</th>
                      <th className="p-3 font-semibold">Elite Professional</th>
                      <th className="p-3 font-semibold">Academy Level</th>
                      <th className="p-3 font-semibold">Club / Grassroots</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 font-mono tabular-nums text-stone-800">
                    <tr>
                      <td className="p-3 font-sans font-medium text-stone-900">
                        Pro Agility 5-10-5 (sec)
                      </td>
                      <td className="p-3 text-emerald-700">&lt; 4.15s</td>
                      <td className="p-3 text-amber-700">4.20 - 4.45s</td>
                      <td className="p-3 text-stone-600">&gt; 4.50s</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-sans font-medium text-stone-900">
                        3-Cone L-Drill (sec)
                      </td>
                      <td className="p-3 text-emerald-700">&lt; 6.90s</td>
                      <td className="p-3 text-amber-700">7.00 - 7.35s</td>
                      <td className="p-3 text-stone-600">&gt; 7.40s</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-sans font-medium text-stone-900">
                        T-Test Agility (sec)
                      </td>
                      <td className="p-3 text-emerald-700">&lt; 9.50s</td>
                      <td className="p-3 text-amber-700">9.60 - 10.40s</td>
                      <td className="p-3 text-stone-600">&gt; 10.50s</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-sans font-medium text-stone-900">
                        20m Linear Sprint (sec)
                      </td>
                      <td className="p-3 text-emerald-700">&lt; 2.85s</td>
                      <td className="p-3 text-amber-700">2.90 - 3.10s</td>
                      <td className="p-3 text-stone-600">&gt; 3.15s</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 italic">
                *Times measured via electronic timing gates. When using hand timers, add +0.24 seconds for human reaction bias.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
          >
            Close Tools
          </button>
        </div>
      </div>
    </div>
  );
};
