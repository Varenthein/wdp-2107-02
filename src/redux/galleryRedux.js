/* selectors */
export const getGallery = ({ gallery }) => gallery;

export const getActiveItem = ({ gallery }) =>
  gallery.filter(item => item.active === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
