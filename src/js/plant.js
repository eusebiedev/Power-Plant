//This template is where Buisiness Logic will go

export const hydrate = (plant) => {
  return {
    ...plant, 
    water: (plant.water || 0) + 1
  }
};

export const feed = (plant) => {
  return {
    ...plant, 
    soil: (plant.soil || 0) + 1
  }
};

