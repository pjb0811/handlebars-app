async function getComponent({ component }) {
  /* if (typeof component === 'string') {
    component = await import(`../${component}`);

    component = component.default;
  }
  return component; */
}

module.exports = getComponent;
