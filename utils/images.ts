// Mapping of authentic images for Hola Panjim
// Dynamically references only existing image files

const IMAGE_INDICES = [
  101, 102, 103, 104, 105, 108, 109, 110, 111, 112,
  114, 115, 117, 118, 119, 120, 121, 122, 123, 124,
  133, 134, 135, 136,
  142, 146, 148, 149, 150, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161,
  163, 164, 165, 166, 167, 168,
  171, 172, 173, 175, 176, 178, 180, 181, 184,
];

const PNG_INDICES = [131, 132];

const getAuthenticImage = (index: number) => {
  const ext = PNG_INDICES.includes(index) ? 'png' : 'jpg';
  return `/images/authentic/img_${index}.${ext}`;
};

// All available authentic images
export const AUTHENTIC_IMAGES = IMAGE_INDICES.map(getAuthenticImage);

// Specialized lists to ensure no reuse between sections
export const HERO_IMAGES = AUTHENTIC_IMAGES.slice(0, 5);
export const STORY_IMAGES = AUTHENTIC_IMAGES.slice(5, 7);
export const MENU_HIGHLIGHTS = AUTHENTIC_IMAGES.slice(7, 30);
export const INSTAGRAM_IMAGES = AUTHENTIC_IMAGES.slice(30, 42);
export const LOCATION_IMAGES = AUTHENTIC_IMAGES.slice(42, 44);
export const ADDITIONAL_IMAGES = AUTHENTIC_IMAGES.slice(44);
