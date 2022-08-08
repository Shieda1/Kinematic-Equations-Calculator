// https://calculator.swiftutors.com/kinematic-equations-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const displacementRadio = document.getElementById('displacementRadio');
const accelerationRadio = document.getElementById('accelerationRadio');
const timeRadio = document.getElementById('timeRadio');
const initialVelocityRadio = document.getElementById('initialVelocityRadio');
const finalVelocityRadio = document.getElementById('finalVelocityRadio');

let displacement;
let acceleration = v1;
let time = v2;
let initialVelocity = v3;
let finalVelocity = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

displacementRadio.addEventListener('click', function() {
  variable1.textContent = '(a) Acceleration';
  variable2.textContent = '(t) Time';
  variable3.textContent = '(Vi) Initial Velocity';
  variable4.textContent = '(Vf) Final Velocity';
  acceleration = v1;
  time = v2;
  initialVelocity = v3;
  finalVelocity = v4;
  result.textContent = '';
});

accelerationRadio.addEventListener('click', function() {
  variable1.textContent = '(d) Displacement';
  variable2.textContent = '(t) Time';
  variable3.textContent = '(Vi) Initial Velocity';
  variable4.textContent = '(Vf) Final Velocity';
  displacement = v1;
  time = v2;
  initialVelocity = v3;
  finalVelocity = v4;
  result.textContent = '';
});

timeRadio.addEventListener('click', function() {
  variable1.textContent = '(d) Displacement';
  variable2.textContent = '(a) Acceleration';
  variable3.textContent = '(Vi) Initial Velocity';
  variable4.textContent = '(Vf) Final Velocity';
  displacement = v1;
  acceleration = v2;
  initialVelocity = v3;
  finalVelocity = v4;
  result.textContent = '';
});

initialVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(d) Displacement';
  variable2.textContent = '(a) Acceleration';
  variable3.textContent = '(t) Time';
  variable4.textContent = '(Vf) Final Velocity';
  displacement = v1;
  acceleration = v2;
  time = v3;
  finalVelocity = v4;
  result.textContent = '';
});

finalVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(d) Displacement';
  variable2.textContent = '(a) Acceleration';
  variable3.textContent = '(t) Time';
  variable4.textContent = '(Vi) Initial Velocity';
  displacement = v1;
  acceleration = v2;
  time = v3;
  initialVelocity = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(displacementRadio.checked)
    result.textContent = `Displacement = ${computeDisplacement().toFixed(2)}`;

  else if(accelerationRadio.checked)
    result.textContent = `Acceleration = ${computeAcceleration().toFixed(2)}`;

  else if(timeRadio.checked)
    result.textContent = `Time = ${computeTime().toFixed(2)}`;

  else if(initialVelocityRadio.checked)
    result.textContent = `Initial Velocity = ${computeInitialVelocity().toFixed(2)}`;

  else if(finalVelocityRadio.checked)
    result.textContent = `Final Velocity = ${computeFinalVelocity().toFixed(2)}`;
})

// calculation

function computeDisplacement() {
  return (Number(initialVelocity.value) * Number(time.value)) + (0.5 * Number(acceleration.value) * Math.pow(Number(time.value), 2))
}

function computeAcceleration() {
  return (Number(displacement.value) - (Number(initialVelocity.value) * Number(time.value))) / (0.5 * Math.pow(Number(time.value), 2));
}

function computeTime() {
  return (Number(finalVelocity.value) * Number(initialVelocity.value)) / Number(acceleration.value);
}

function computeInitialVelocity() {
  return Number(displacement.value) - (0.5 * Number(acceleration.value) - Math.pow(Number(time.value), 2)) / Number(time.value);
}

function computeFinalVelocity() {
  return Math.sqrt(Math.pow(Number(initialVelocity.value), 2) + (2 * Number(acceleration.value) * Number(displacement.value)));
}