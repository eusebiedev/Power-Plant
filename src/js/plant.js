export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

export const changeStates = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) - value * (-1)
    });
  };
};

export const feed = changeState("soil");
export const blueFood = changeState("soil")(10);

export const starve = changeStates("starve")();
export const removeFood = changeStates("starve")(-1);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);

export const sunshine = changeState("sunshine")(1);
export const superSun = changeState("sunshine")(50);

if (typeof window !== 'undefined'){
  window.onload = function() {
    document.getElementById('feed').onclick = function() {
      const newState = stateControl(blueFood);
      document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
    };

    document.getElementById('starve').onclick = function() {
      const newState4 = stateControl(removeFood);
      document.getElementById('soil-value').innerText = `Drain: ${newState4.starve}`;
    };

    document.getElementById('hydrate').onclick = function() {
      const newState2 = stateControl(superWater);
      document.getElementById('water-value').innerText = `Water: ${newState2.water}`;
    };

    document.getElementById('sunshine').onclick = function() {
      const newState3 = stateControl(superSun);
      document.getElementById('sunshine-value').innerText = `Sunshine: ${newState3.sunshine}`;
    };
  };
}