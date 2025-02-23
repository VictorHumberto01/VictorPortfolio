import React from 'react';

const IsometricCubeAnimation = () => {
  // Generate cube coordinates
  const dimensions = [1, 2, 3];
  const generateCubes = () => {
    const cubes = [];
    for (let h of dimensions) {
      for (let w of dimensions) {
        for (let l of dimensions) {
          cubes.push({ h, w, l });
        }
      }
    }
    return cubes;
  };

  const getKeyframeStyle = (h, w, l) => {
    return {
      '0%, 100%': {
        transform: `translate(${w * -50 - 50 + l * 50 + 50}%, ${h * 50 - 200 + w * 25 - 25 + l * 25 + 25}%)`
      },
      '14%': {
        transform: `translate(${w * -50 - 50 + l * 100 - 50}%, ${h * 50 - 200 + w * 25 - 25 + l * 50 - 25}%)`
      },
      '28%': {
        transform: `translate(${w * -100 + 50 + l * 100 - 50}%, ${h * 50 - 200 + w * 50 - 75 + l * 50 - 25}%)`
      },
      '43%': {
        transform: `translate(${w * -100 - 100 + l * 100 + 100}%, ${h * 100 - 400 + w * 50 - 50 + l * 50 + 50}%)`
      },
      '57%': {
        transform: `translate(${w * -100 - 100 + l * 50 + 200}%, ${h * 100 - 400 + w * 50 - 50 + l * 25 + 100}%)`
      },
      '71%': {
        transform: `translate(${w * -50 - 200 + l * 50 + 200}%, ${h * 100 - 375 + w * 25 - 25 + l * 25 + 100}%)`
      },
      '85%': {
        transform: `translate(${w * -50 - 50 + l * 50 + 50}%, ${h * 50 - 200 + w * 25 - 25 + l * 25 + 25}%)`
      }
    };
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#222]">
      <div className="relative h-[100px] w-[86px] scale-50">
        {generateCubes().map(({ h, w, l }) => (
          <div
            key={`${h}${w}${l}`}
            className="absolute w-[86px] h-[100px]"
            style={{
              zIndex: -h,
              animation: 'transform 3s ease infinite',
              ...getKeyframeStyle(h, w, l)
            }}
          >
            <div className="absolute h-[50px] w-[50px] origin-[0_0] bg-[#1d9099] rotate-[210deg] skew-x-[-30deg] translate-x-[-75px] translate-y-[-22px] scale-y-[0.86] z-[2]" />
            <div className="absolute h-[50px] w-[50px] origin-[0_0] bg-[#D53A33] rotate-90 skew-x-[-30deg] scale-y-[0.86] translate-x-[25px] translate-y-[-50px]" />
            <div className="absolute h-[50px] w-[50px] origin-[0_0] bg-[#E79C10] rotate-[-30deg] skew-x-[-30deg] translate-x-[49px] translate-y-[65px] scale-y-[0.86]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IsometricCubeAnimation;