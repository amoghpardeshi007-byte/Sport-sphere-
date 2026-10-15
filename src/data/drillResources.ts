import { DrillResource } from '../types/sports';

export const DRILL_RESOURCES: Record<string, DrillResource> = {
  'cricket-bowling-drills': {
    id: 'cricket-bowling-drills',
    title: 'Complete Cricket Fast Bowling Biomechanics & Speed Drills',
    category: 'Cricket Fast Bowling',
    level: 'Intermediate to Advanced',
    duration: '45 Minutes',
    overview: 'A structured progression designed by certified pace bowling coaches to refine run-up cadence, explosive back-foot contact, and an upright front-leg brace for maximum release velocity.',
    targetFocus: ['Run-up acceleration consistency', 'Back-foot contact impulse', 'Locked front knee brace', 'Seam presentation at release'],
    steps: [
      {
        stepNumber: 1,
        title: 'Run-Up Rhythm & Cone Cadence Drills',
        description: 'Set 6 cones at gradually expanding intervals. Accelerate smoothly without bounding early. Bowler builds rhythm progressively until final 4 strides reach 90% peak sprint pace.',
        setsReps: '5 repetitions without ball, 5 with ball in hand'
      },
      {
        stepNumber: 2,
        title: 'Walk-Through to Front-Leg Brace Drill',
        description: 'From 3 paces out, plant the front foot firmly on a chalked line, ensuring the lead knee is locked/braced (angle > 165°). Transfer momentum upwards through the hips and core.',
        setsReps: '3 sets of 8 reps into a padded net'
      },
      {
        stepNumber: 3,
        title: 'Targeted Target Pitching with Overweight/Underweight Balls',
        description: 'Alternate between standard 156g cricket ball and a 140g ball to develop arm speed, aiming consistently at a 1.5-metre good-length target mat.',
        setsReps: '2 sets of 6 deliveries per weight'
      },
      {
        stepNumber: 4,
        title: 'Dynamic Follow-Through & Deceleration Path',
        description: 'Ensure natural diagonal deceleration across the body to distribute impact forces safely across thoracic spine and hips, avoiding abrupt stops.',
        setsReps: '4 full run-up deliveries focused on deceleration'
      }
    ],
    coachingTips: [
      'Keep your eyes locked on the batsman’s off-stump throughout the delivery stride.',
      'Never collapse the front knee at impact; a rigid front leg acts as a catapult for the upper body.',
      'Maintain an unbroken 48-hour recovery window between high-intensity spell sessions.'
    ],
    safetyWarning: 'Stop immediately if feeling sharp localized lower back or hamstring pain. Fast bowlers should undergo regular spinal screening.'
  },
  'cricket-workload-management': {
    id: 'cricket-workload-management',
    title: 'Fast Bowling Workload Management & Stress Fracture Prevention',
    category: 'Cricket Sports Science',
    level: 'All Levels',
    duration: 'Weekly Management Protocol',
    overview: 'Scientific bowling load parameters formulated by sports medicine specialists to balance skill development with spinal safety and lumbo-pelvic integrity.',
    targetFocus: ['Acute-to-chronic workload ratio (ACWR)', 'Spinal rotation stress reduction', 'Core isometric endurance'],
    steps: [
      {
        stepNumber: 1,
        title: 'Weekly Delivery Cap Formulation',
        description: 'Maintain 120–150 competitive/match deliveries per week max for developing bowlers (under 21). Never exceed 30 competitive match deliveries in a single day without 48h rest.',
        setsReps: 'Weekly log tracking'
      },
      {
        stepNumber: 2,
        title: 'Posterior Chain & Core Stability Routine',
        description: 'Incorporate Romanian deadlifts, Pallof presses, and bird-dogs to shield lumbar vertebrae from shearing forces during lateral flexion.',
        setsReps: '3 sets of 10 reps, 3 times per week'
      },
      {
        stepNumber: 3,
        title: 'Wearable GPS & Heart Rate Monitoring',
        description: 'Track run-up velocity and cumulative sprint meters per training session using sports GPS units.',
        setsReps: 'Real-time telemetry per session'
      }
    ],
    coachingTips: [
      'Avoid sudden spikes in weekly overs: increase total delivery count by no more than 10-15% week-over-week.',
      'Prioritize ice baths and contrast showers within 90 minutes post-match.'
    ]
  },
  'football-training-drills': {
    id: 'football-training-drills',
    title: 'Football Tactical Drills & High-Tempo Possession Circuits',
    category: 'Football / Soccer',
    level: 'Grassroots to Elite',
    duration: '60 Minutes',
    overview: 'High-density positional rondo exercises, transition drills, and spatial scanning practices inspired by elite European academies.',
    targetFocus: ['360-degree head scanning', 'First-touch orientation', 'Body shape during ball reception', 'Counter-pressing transitions'],
    steps: [
      {
        stepNumber: 1,
        title: '4v4 + 3 Neutral Transition Rondo',
        description: 'Set up a 20x20m grid. Attacking team retains possession using three neutrals in central pivot and wide edges. On turnover, defending team immediately counters to mini-goals.',
        setsReps: '4 rounds of 4 minutes with 90s rest'
      },
      {
        stepNumber: 2,
        title: 'Wall-Pass & One-Touch Finishing Circuit',
        description: 'Central midfielder plays into striker’s feet, striker sets ball back on one touch, winger overlaps and delivers a low cross into the penalty box.',
        setsReps: '12 repetitions per side'
      },
      {
        stepNumber: 3,
        title: 'Defensive 1v1 Channel Shadowing',
        description: 'Defenders maintain side-on stance, keeping low center of gravity while shepherding attackers toward the touchline without lunging into reckless tackles.',
        setsReps: '8 reps per player'
      }
    ],
    coachingTips: [
      'Demand proactive vocal communication: "Turn!", "Man on!", "Time!"',
      'The receiver’s back foot should always be open toward the attacking half.'
    ]
  },
  'strength-conditioning-routines': {
    id: 'strength-conditioning-routines',
    title: 'Multi-Sport Strength & Conditioning Periodization Guide',
    category: 'Athletic Fitness',
    level: 'Foundational to Intermediate',
    duration: '50 Minutes',
    overview: 'Evidence-based functional strength foundation emphasizing multi-joint compound lifts, kinetic chain force transfer, and eccentric landing control.',
    targetFocus: ['Posterior chain power', 'Knee stability on landing', 'Rotational core power', 'Shoulder cuff integrity'],
    steps: [
      {
        stepNumber: 1,
        title: 'Barbell Trap-Bar Deadlift or Goblet Squat',
        description: 'Build foundational hip extension power and quad drive. Focus on a neutral spine and controlled eccentric descent.',
        setsReps: '4 sets of 6 reps @ 75% 1RM'
      },
      {
        stepNumber: 2,
        title: 'Rear-Foot Elevated Split Squats (Bulgarian Squats)',
        description: 'Unilateral leg strength to correct limb asymmetries common in field sport athletes.',
        setsReps: '3 sets of 8 reps per leg'
      },
      {
        stepNumber: 3,
        title: 'Explosive Medicine Ball Rotational Throws',
        description: 'Stand perpendicular to concrete wall; initiate rotation from the back hip through the torso into the ball release.',
        setsReps: '3 sets of 6 throws per side'
      },
      {
        stepNumber: 4,
        title: 'Loaded Farmer’s Carries',
        description: 'Walk 40 meters maintaining upright athletic posture with heavy dumbbells or kettlebells to fortify trap, grip, and core stabilizers.',
        setsReps: '4 sets of 40m walks'
      }
    ],
    coachingTips: [
      'Prioritize movement quality over weight on the bar.',
      'Allow 2-3 minutes of rest between heavy multi-joint sets for full ATP-CP restoration.'
    ]
  },
  'speed-agility-cone-drills': {
    id: 'speed-agility-cone-drills',
    title: 'Elite Speed & Agility Multi-Directional Cone Drills',
    category: 'Speed & Agility',
    level: 'All Athletes',
    duration: '35 Minutes',
    overview: 'High-velocity movement patterns focusing on sharp shin angles during acceleration, center of gravity lowering for deceleration, and reaction under auditory cues.',
    targetFocus: ['Positive shin angles', 'Deceleration within 2 strides', 'Lateral change-of-direction', 'Auditory reaction time'],
    steps: [
      {
        stepNumber: 1,
        title: 'Pro Agility 5-10-5 Shuttle Drill',
        description: 'Start in a three-point stance. Sprint 5 yards to the right, touch line with hand; sprint 10 yards to the left, touch line; burst 5 yards through the center line.',
        setsReps: '5 timed reps with 2 minutes rest between'
      },
      {
        stepNumber: 2,
        title: 'L-Drill (3-Cone Agility Circuit)',
        description: '3 cones arranged in an L-shape 5 yards apart. Sprint to cone 1, back to start, loop around cone 2, weave figure-8 around cone 3, and sprint home.',
        setsReps: '4 repetitions per direction'
      },
      {
        stepNumber: 3,
        title: 'Reactive Mirroring Drill',
        description: 'Two athletes face each other across a 5-meter boundary. Lead athlete makes sudden lateral cuts; chaser must anticipate and mirror hips.',
        setsReps: '6 rounds of 15 seconds'
      }
    ],
    coachingTips: [
      'Drop your hips before planting your change-of-direction foot; high hips lead to slips and knee shear.',
      'Never train agility in a state of deep exhaustion; form breaks down and motor learning suffers.'
    ]
  },
  'sports-nutrition-meal-plans': {
    id: 'sports-nutrition-meal-plans',
    title: 'Athlete Sports Nutrition Meal Plans & Macro Fueling Protocols',
    category: 'Sports Nutrition',
    level: 'All Athletes',
    duration: 'Daily Protocol',
    overview: 'Targeted nutritional plans providing clean complex carbohydrates for glycogen storage, bioavailable protein for muscle repair, and electrolyte fluid timing.',
    targetFocus: ['Carbohydrate loading', 'Optimal protein distribution (1.6-2.2g/kg)', 'Hydration with electrolytes', 'Anti-inflammatory micronutrients'],
    steps: [
      {
        stepNumber: 1,
        title: 'Pre-Training Fuel (2-3 Hours Prior)',
        description: 'Complex carbohydrates with moderate lean protein: Brown rice or whole wheat roti with grilled chicken breast or dal/paneer, sweet potatoes, and 500ml water.',
        setsReps: '60–80g carbs, 25–35g protein'
      },
      {
        stepNumber: 2,
        title: 'Intra-Workout Hydration',
        description: 'Sip cold water with pinch of Himalayan pink salt, lemon, and 4-6% carbohydrate electrolyte mix every 15-20 minutes during intense heat or matches.',
        setsReps: '150–250ml every 15–20 minutes'
      },
      {
        stepNumber: 3,
        title: 'Post-Workout Recovery Window (Within 45 Mins)',
        description: 'Rapid glycogen replenishment and muscle repair: Whey protein isolate or curd/egg whites with banana, honey, or berries. 3:1 carb-to-protein ratio.',
        setsReps: '40–50g carbs, 30g high-quality protein'
      },
      {
        stepNumber: 4,
        title: 'Evening Muscle Satiety & Sleep Support',
        description: 'Casein-rich cottage cheese (paneer) or Greek yogurt with almonds, pumpkin seeds, and tart cherry juice to aid melatonin synthesis.',
        setsReps: 'Bedtime nutrient support'
      }
    ],
    coachingTips: [
      'Avoid relying on isolated supplements before building a consistent whole-food foundation.',
      'Check urine color: Pale straw indicates optimal hydration; dark amber signals dehydration.'
    ]
  },
  'basketball-beginner-drills': {
    id: 'basketball-beginner-drills',
    title: 'Basketball Fundamentals: Ball Handling, Passing & Shooting Drills',
    category: 'Basketball',
    level: 'Beginner to Intermediate',
    duration: '40 Minutes',
    overview: 'Essential motor skill development curriculum for aspiring basketball players: fingertips dribbling control, passing accuracy, BEEF shooting technique, and defensive slides.',
    targetFocus: ['BEEF shooting mechanics', 'Weak-hand dribbling confidence', 'Two-handed crisp passes', 'Defensive stance & lateral slides'],
    steps: [
      {
        stepNumber: 1,
        title: 'Stationary Two-Ball Dribbling',
        description: 'Dribble two basketballs simultaneously below knee height, alternating high and low bounces, keeping chin and eyes up off the floor.',
        setsReps: '4 sets of 45 seconds'
      },
      {
        stepNumber: 2,
        title: 'BEEF Form Shooting from 4 Feet',
        description: 'Balance, Elbow under ball, Eye on back of rim, Follow-through (swan neck wrist snap). Shoot 20 clean swishes without backboard from direct front.',
        setsReps: '3 sets of 20 makes from baseline, wing, top of key'
      },
      {
        stepNumber: 3,
        title: 'Partner Wall & Target Passing Drills',
        description: 'Chest pass, bounce pass (hitting floor 2/3 distance to teammate), and overhead outlet pass with backspin.',
        setsReps: '30 of each pass style'
      },
      {
        stepNumber: 4,
        title: 'Zig-Zag Defensive Slide Channel',
        description: 'Stay in low stance, wide base, palms up, sliding diagonally without crossing feet over across the key.',
        setsReps: '6 full court lengths'
      }
    ],
    coachingTips: [
      'Control the ball with finger pads, not the palm of your hand.',
      'Hold your shooting follow-through until the ball passes through the net.'
    ]
  },
  'sports-psychology-exercises': {
    id: 'sports-psychology-exercises',
    title: 'Sports Psychology: Mindset, Breathwork & Pressure Control',
    category: 'Sports Psychology',
    level: 'All Athletes',
    duration: '20 Minutes Daily',
    overview: 'Evidence-based cognitive drills used by Olympic psychologists to master pre-game butterflies, reset after blunders, and maintain flow-state focus.',
    targetFocus: ['Box breathing (4-4-4-4)', 'Process vs outcome framing', 'Pre-performance anchor routines', 'Positive self-talk cues'],
    steps: [
      {
        stepNumber: 1,
        title: 'Tactical Box Breathing for Heart Rate Regulation',
        description: 'Inhale through nose for 4 seconds, hold lungs full for 4s, exhale smoothly through mouth for 4s, hold empty for 4s. Instantly reduces sympathetic nervous fight-or-flight spikes.',
        setsReps: '4 cycles before competition or between plays'
      },
      {
        stepNumber: 2,
        title: 'The 3-Second Mental Reset Ritual',
        description: 'After a missed shot, drop catch, or bad referee decision: 1) Physical wipe (brush thigh), 2) Deep exhale, 3) Verbal trigger word ("Next play!").',
        setsReps: 'Practiced continuously during live scrimmages'
      },
      {
        stepNumber: 3,
        title: 'Mental Imagery & Visualization Routine',
        description: 'Close eyes in quiet room. Visualize successful execution in vivid first-person: feeling the turf, hearing the crowd, executing perfect technique.',
        setsReps: '10 minutes daily before sleep'
      }
    ],
    coachingTips: [
      'Never judge emotions as "bad" – nerves are simply your body releasing adrenaline to help you perform.',
      'Focus strictly on what is in your 100% control: effort, attitude, and body language.'
    ]
  },
  'youth-academy-pathways': {
    id: 'youth-academy-pathways',
    title: 'Grassroots to Academy Development Roadmap',
    category: 'Athlete Development',
    level: 'Youth & Aspiring Professionals',
    duration: 'Long-term Roadmap',
    overview: 'Step-by-step navigational framework helping young athletes, parents, and coaches progress from municipal community grounds to professional club academies.',
    targetFocus: ['Multi-sport sampling in early years', 'Balancing school and academy training', 'Video portfolio scouting creation', 'Coach-athlete communication'],
    steps: [
      {
        stepNumber: 1,
        title: 'Foundational Multi-Sport Sampling (Ages 6-12)',
        description: 'Participate in at least two complementary sports to build generalized spatial literacy, agility, and prevent overuse injuries before early specialization.',
        setsReps: 'Multi-sport participation'
      },
      {
        stepNumber: 2,
        title: 'Certified Academy Enrolment & Coach Mentorship',
        description: 'Seek accredited coaches who prioritize bio-banding, fundamental movement patterns, and psychological safety over premature winning-at-all-costs.',
        setsReps: 'Regular structured practice'
      },
      {
        stepNumber: 3,
        title: 'Curated Scouting Video Portfolio',
        description: 'Record high-angle unedited match footage showing positioning off-the-ball, decision-making under pressure, and reaction after mistakes.',
        setsReps: '3–5 minute highlight reel updated bi-annually'
      }
    ],
    coachingTips: [
      'Never sacrifice academic homework or sleep; cognitive fatigue severely impairs on-field reaction time.',
      'Comparison is the thief of athletic joy. Measure yourself only against your previous week.'
    ]
  },
  'future-sports-tech': {
    id: 'future-sports-tech',
    title: 'Modern Sports Science & Wearable Tech Evaluation Guide',
    category: 'Sports Technology',
    level: 'Coaches, Analysts & Athletes',
    duration: 'Tech Reference',
    overview: 'Comprehensive breakdown of how GPS tracking, computer vision ball-tracking, AI biomechanics, and heart rate variability (HRV) inform modern athletic decisions.',
    targetFocus: ['GPS Catapult/STATSports metrics', 'Hawkeye ball-tracking calibration', 'Whoop/Oura HRV recovery analysis', 'Computer vision automated tagging'],
    steps: [
      {
        stepNumber: 1,
        title: 'High-Speed Video Analysis Setup',
        description: 'Position 120fps/240fps cameras perpendicular to athlete trajectory. Use open-source or specialized software to measure release angles and joint angular velocities.',
        setsReps: 'Recorded bi-weekly'
      },
      {
        stepNumber: 2,
        title: 'Morning Heart Rate Variability (HRV) Baselining',
        description: 'Measure rMSSD upon waking. Low HRV indicates central nervous system exhaustion; adjust session intensity from maximum sprint to tactical recovery.',
        setsReps: 'Daily morning 2-minute baseline'
      },
      {
        stepNumber: 3,
        title: 'Data-Driven Load Balancing',
        description: 'Combine subjective RPE (Rate of Perceived Exertion 1-10) with objective sprint meters to prevent non-functional overreaching.',
        setsReps: 'Post-training wellness survey'
      }
    ],
    coachingTips: [
      'Technology provides data, but human intuition and coach dialogue provide context.',
      'Never let wearable numbers trigger health anxiety; treat data as informative guidance, not an absolute verdict.'
    ]
  }
};
