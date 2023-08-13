import { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 118.82" {...props}>
      <g>
        <g>
          <path d="m132.01,48.81c1.54-2.9,3.61-5.16,6.22-6.79,2.61-1.63,5.45-2.44,8.53-2.44,2.36,0,4.48.41,6.35,1.24,1.87.83,3.39,1.97,4.55,3.44v-4.28h11.44v55.11h-11.44v-22.47c-1.29,1.56-2.87,2.81-4.71,3.75-1.85.94-3.96,1.41-6.32,1.41-3.03,0-5.84-.8-8.43-2.41-2.59-1.61-4.65-3.86-6.19-6.75-1.54-2.9-2.31-6.2-2.31-9.9s.77-7,2.31-9.9Zm24.48,4.78c-.78-1.36-1.8-2.38-3.04-3.08-1.25-.69-2.56-1.04-3.95-1.04s-2.63.35-3.88,1.04c-1.25.69-2.27,1.73-3.08,3.11-.8,1.38-1.2,3.08-1.2,5.08s.4,3.69,1.2,5.05c.8,1.36,1.83,2.39,3.08,3.08,1.25.69,2.54,1.04,3.88,1.04s2.64-.34,3.91-1.04c1.27-.69,2.3-1.73,3.08-3.11.78-1.38,1.17-3.08,1.17-5.08s-.39-3.69-1.17-5.05Z" />
          <path d="m214.24,39.98v37.32h-11.44v-5.08c-1.16,1.65-2.73,2.98-4.71,3.98s-4.18,1.5-6.59,1.5c-2.85,0-5.37-.63-7.56-1.91-2.19-1.27-3.88-3.11-5.08-5.52-1.2-2.41-1.81-5.24-1.81-8.49v-21.8h11.37v20.26c0,2.5.65,4.44,1.94,5.82,1.29,1.38,3.03,2.07,5.22,2.07s3.99-.69,5.28-2.07c1.29-1.38,1.94-3.32,1.94-5.82v-20.26h11.44Z" />
          <path d="m223.3,34.33c-1.27-1.18-1.91-2.64-1.91-4.38s.64-3.27,1.91-4.45c1.27-1.18,2.91-1.77,4.92-1.77s3.58.59,4.85,1.77c1.27,1.18,1.91,2.66,1.91,4.45s-.64,3.2-1.91,4.38c-1.27,1.18-2.89,1.77-4.85,1.77s-3.64-.59-4.92-1.77Zm10.6,5.65v37.32h-11.44v-37.32h11.44Z" />
          <path d="m277.17,61.38h-25.88c.18,2.32.93,4.09,2.24,5.32,1.31,1.23,2.93,1.84,4.85,1.84,2.85,0,4.84-1.2,5.95-3.61h12.17c-.62,2.45-1.75,4.66-3.38,6.62-1.63,1.96-3.67,3.5-6.12,4.61-2.45,1.11-5.19,1.67-8.23,1.67-3.66,0-6.91-.78-9.76-2.34-2.85-1.56-5.08-3.79-6.69-6.69-1.61-2.9-2.41-6.29-2.41-10.16s.79-7.27,2.37-10.17c1.58-2.9,3.8-5.13,6.65-6.69,2.85-1.56,6.13-2.34,9.83-2.34s6.82.76,9.63,2.27c2.81,1.52,5,3.68,6.59,6.49,1.58,2.81,2.37,6.09,2.37,9.83,0,1.07-.07,2.19-.2,3.34Zm-11.5-6.35c0-1.96-.67-3.52-2.01-4.68-1.34-1.16-3.01-1.74-5.02-1.74s-3.53.56-4.85,1.67c-1.32,1.11-2.13,2.7-2.44,4.75h14.31Z" />
          <path d="m299.84,41.36c2.01-1.18,4.23-1.77,6.69-1.77v12.1h-3.14c-2.85,0-4.99.61-6.42,1.84-1.43,1.23-2.14,3.38-2.14,6.45v17.32h-11.44v-37.32h11.44v6.22c1.34-2.05,3.01-3.67,5.02-4.85Z" />
          <path d="m319.13,75.5c-2.92-1.56-5.22-3.79-6.89-6.69-1.67-2.9-2.51-6.29-2.51-10.16s.85-7.21,2.54-10.13c1.69-2.92,4.01-5.16,6.96-6.72,2.94-1.56,6.24-2.34,9.9-2.34s6.96.78,9.9,2.34c2.94,1.56,5.26,3.8,6.96,6.72,1.69,2.92,2.54,6.3,2.54,10.13s-.86,7.21-2.58,10.13c-1.72,2.92-4.06,5.16-7.02,6.72-2.97,1.56-6.28,2.34-9.93,2.34s-6.94-.78-9.86-2.34Zm15.45-9.97c1.54-1.6,2.31-3.9,2.31-6.89s-.75-5.28-2.24-6.89c-1.49-1.61-3.33-2.41-5.52-2.41s-4.08.79-5.55,2.37c-1.47,1.58-2.21,3.89-2.21,6.92s.72,5.28,2.17,6.89c1.45,1.61,3.27,2.41,5.45,2.41s4.05-.8,5.58-2.41Z" />
          <path d="m366.04,27.81v49.49h-11.44V27.81h11.44Z" />
          <path d="m381.46,75.5c-2.92-1.56-5.22-3.79-6.89-6.69-1.67-2.9-2.51-6.29-2.51-10.16s.85-7.21,2.54-10.13c1.69-2.92,4.01-5.16,6.96-6.72,2.94-1.56,6.24-2.34,9.9-2.34s6.96.78,9.9,2.34c2.94,1.56,5.26,3.8,6.96,6.72,1.69,2.92,2.54,6.3,2.54,10.13s-.86,7.21-2.58,10.13c-1.72,2.92-4.06,5.16-7.02,6.72-2.97,1.56-6.28,2.34-9.93,2.34s-6.94-.78-9.86-2.34Zm15.45-9.97c1.54-1.6,2.31-3.9,2.31-6.89s-.75-5.28-2.24-6.89c-1.49-1.61-3.33-2.41-5.52-2.41s-4.08.79-5.55,2.37c-1.47,1.58-2.21,3.89-2.21,6.92s.72,5.28,2.17,6.89c1.45,1.61,3.27,2.41,5.45,2.41s4.05-.8,5.58-2.41Z" />
          <path d="m437.74,67.6v9.7h-5.82c-4.15,0-7.38-1.01-9.7-3.04-2.32-2.03-3.48-5.34-3.48-9.93v-14.85h-4.55v-9.5h4.55v-9.1h11.44v9.1h7.49v9.5h-7.49v14.98c0,1.11.27,1.92.8,2.41.53.49,1.43.74,2.67.74h4.08Z" />
          <path d="m479.06,61.38h-25.88c.18,2.32.92,4.09,2.24,5.32,1.31,1.23,2.93,1.84,4.85,1.84,2.85,0,4.84-1.2,5.95-3.61h12.17c-.62,2.45-1.75,4.66-3.38,6.62-1.63,1.96-3.67,3.5-6.12,4.61-2.45,1.11-5.19,1.67-8.23,1.67-3.66,0-6.91-.78-9.76-2.34-2.85-1.56-5.08-3.79-6.69-6.69-1.61-2.9-2.41-6.29-2.41-10.16s.79-7.27,2.37-10.17c1.58-2.9,3.8-5.13,6.65-6.69,2.85-1.56,6.13-2.34,9.83-2.34s6.82.76,9.63,2.27c2.81,1.52,5,3.68,6.59,6.49,1.58,2.81,2.37,6.09,2.37,9.83,0,1.07-.07,2.19-.2,3.34Zm-11.5-6.35c0-1.96-.67-3.52-2.01-4.68-1.34-1.16-3.01-1.74-5.02-1.74s-3.53.56-4.85,1.67c-1.32,1.11-2.13,2.7-2.44,4.75h14.31Z" />
          <path d="m485.72,76.06c-1.27-1.18-1.91-2.64-1.91-4.38s.63-3.28,1.91-4.48c1.27-1.2,2.91-1.81,4.92-1.81s3.58.6,4.85,1.81c1.27,1.2,1.91,2.7,1.91,4.48s-.64,3.2-1.91,4.38c-1.27,1.18-2.89,1.77-4.85,1.77s-3.64-.59-4.92-1.77Z" />
          <path d="m504.24,48.48c1.58-2.9,3.79-5.13,6.62-6.69,2.83-1.56,6.07-2.34,9.73-2.34,4.68,0,8.59,1.23,11.74,3.68,3.14,2.45,5.2,5.91,6.19,10.37h-12.17c-1.03-2.85-3.01-4.28-5.95-4.28-2.1,0-3.77.81-5.02,2.44-1.25,1.63-1.87,3.96-1.87,6.99s.62,5.36,1.87,6.99c1.25,1.63,2.92,2.44,5.02,2.44,2.94,0,4.93-1.43,5.95-4.28h12.17c-.98,4.37-3.05,7.8-6.22,10.3-3.17,2.5-7.07,3.75-11.7,3.75-3.66,0-6.9-.78-9.73-2.34-2.83-1.56-5.04-3.79-6.62-6.69-1.58-2.9-2.37-6.29-2.37-10.16s.79-7.27,2.37-10.17Z" />
          <path d="m551.73,75.5c-2.92-1.56-5.22-3.79-6.89-6.69-1.67-2.9-2.51-6.29-2.51-10.16s.85-7.21,2.54-10.13c1.69-2.92,4.01-5.16,6.96-6.72,2.94-1.56,6.24-2.34,9.9-2.34s6.95.78,9.9,2.34c2.94,1.56,5.26,3.8,6.96,6.72,1.69,2.92,2.54,6.3,2.54,10.13s-.86,7.21-2.57,10.13c-1.72,2.92-4.06,5.16-7.02,6.72-2.97,1.56-6.28,2.34-9.93,2.34s-6.94-.78-9.86-2.34Zm15.45-9.97c1.54-1.6,2.31-3.9,2.31-6.89s-.75-5.28-2.24-6.89c-1.49-1.61-3.33-2.41-5.52-2.41s-4.08.79-5.55,2.37c-1.47,1.58-2.21,3.89-2.21,6.92s.72,5.28,2.17,6.89c1.45,1.61,3.27,2.41,5.45,2.41s4.05-.8,5.58-2.41Z" />
          <path d="m645.89,43.8c2.74,2.81,4.11,6.71,4.11,11.7v21.8h-11.37v-20.26c0-2.41-.63-4.27-1.91-5.58s-3.02-1.97-5.25-1.97-3.98.66-5.25,1.97c-1.27,1.32-1.91,3.18-1.91,5.58v20.26h-11.37v-20.26c0-2.41-.64-4.27-1.91-5.58-1.27-1.32-3.02-1.97-5.25-1.97s-3.98.66-5.25,1.97-1.91,3.18-1.91,5.58v20.26h-11.44v-37.32h11.44v4.68c1.16-1.56,2.67-2.8,4.55-3.71,1.87-.91,3.99-1.37,6.35-1.37,2.81,0,5.32.6,7.52,1.81,2.21,1.2,3.93,2.92,5.18,5.15,1.29-2.05,3.05-3.72,5.28-5.02,2.23-1.29,4.66-1.94,7.29-1.94,4.64,0,8.33,1.4,11.07,4.21Z" />
        </g>
        <g id="Symbol">
          <polygon points="51.22 55.92 26.76 31.45 26.76 24.46 51.22 0 75.69 24.46 75.69 31.45 51.22 55.92" />
          <polygon points="82.68 87.37 58.21 62.91 58.21 55.92 82.68 31.45 107.14 55.92 107.14 62.91 82.68 87.37" />
          <polygon points="51.22 118.82 26.76 94.36 26.76 87.37 51.22 62.91 75.69 87.37 75.69 94.36 51.22 118.82" />
          <path d="m5.79,73.39l13.98,13.98,13.98-13.98c7.72-7.72,7.72-20.24,0-27.96h0c-7.72-7.72-20.24-7.72-27.96,0h0c-7.72,7.72-7.72,20.24,0,27.96Zm5.47-13.98c0-4.7,3.81-8.51,8.51-8.51s8.51,3.81,8.51,8.51c0,4.7-3.81,8.51-8.51,8.51-4.7,0-8.51-3.81-8.51-8.51Z" />
        </g>
      </g>
    </svg>
  );
};

const LogoSymbol = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 586.09 650" {...props}>
      <g>
        <g>
          <polygon points="280.2 305.88 146.38 172.06 146.38 133.82 280.2 0 414.03 133.82 414.03 172.06 280.2 305.88" />
          <polygon points="452.26 477.94 318.44 344.12 318.44 305.88 452.26 172.06 586.09 305.88 586.09 344.12 452.26 477.94" />
          <polygon points="280.21 650 146.38 516.18 146.38 477.94 280.2 344.12 414.03 477.94 414.03 516.18 280.21 650" />
          <path d="m31.68,401.47l76.47,76.47,76.47-76.47c42.23-42.23,42.23-110.71,0-152.94h0c-42.23-42.23-110.71-42.23-152.94,0h0c-42.23,42.23-42.23,110.71,0,152.94Zm29.92-76.47c0-25.71,20.84-46.55,46.55-46.55,25.71,0,46.55,20.84,46.55,46.55,0,25.71-20.84,46.55-46.55,46.55-25.71,0-46.55-20.84-46.55-46.55Z" />
        </g>
      </g>
    </svg>
  );
};

const LogoStacked = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 360.01" {...props}>
      <g>
        <g>
          <path d="m2.88,302.2c1.92-3.62,4.51-6.45,7.77-8.48,3.26-2.03,6.81-3.05,10.65-3.05,2.95,0,5.6.52,7.94,1.55,2.34,1.03,4.23,2.46,5.68,4.3v-5.35h14.29v68.84h-14.29v-28.07c-1.62,1.95-3.58,3.51-5.89,4.68-2.31,1.17-4.94,1.76-7.9,1.76-3.79,0-7.3-1-10.53-3.01-3.23-2.01-5.81-4.82-7.73-8.44-1.92-3.62-2.88-7.74-2.88-12.37s.96-8.74,2.88-12.37Zm30.58,5.97c-.98-1.7-2.24-2.98-3.8-3.84-1.56-.86-3.2-1.3-4.93-1.3s-3.29.43-4.85,1.3c-1.56.86-2.84,2.16-3.84,3.88-1,1.73-1.5,3.84-1.5,6.35s.5,4.61,1.5,6.31c1,1.7,2.28,2.98,3.84,3.84,1.56.86,3.17,1.3,4.85,1.3s3.3-.43,4.89-1.3c1.59-.86,2.87-2.16,3.84-3.88.97-1.73,1.46-3.84,1.46-6.35s-.49-4.61-1.46-6.31Z" />
          <path d="m105.6,291.17v46.62h-14.29v-6.35c-1.45,2.06-3.41,3.72-5.89,4.97s-5.22,1.88-8.23,1.88c-3.57,0-6.71-.79-9.44-2.38-2.73-1.59-4.85-3.88-6.35-6.89-1.5-3.01-2.26-6.54-2.26-10.61v-27.24h14.2v25.32c0,3.12.81,5.54,2.42,7.27,1.61,1.73,3.79,2.59,6.52,2.59s4.98-.86,6.6-2.59c1.61-1.73,2.42-4.15,2.42-7.27v-25.32h14.29Z" />
          <path d="m116.92,284.11c-1.59-1.47-2.38-3.3-2.38-5.47s.79-4.08,2.38-5.56c1.59-1.47,3.64-2.21,6.14-2.21s4.47.74,6.06,2.21c1.59,1.48,2.38,3.33,2.38,5.56s-.79,4-2.38,5.47c-1.59,1.48-3.61,2.21-6.06,2.21s-4.55-.74-6.14-2.21Zm13.24,7.06v46.62h-14.29v-46.62h14.29Z" />
          <path d="m184.22,317.9h-32.33c.22,2.9,1.16,5.11,2.8,6.64,1.64,1.53,3.66,2.3,6.06,2.3,3.56,0,6.04-1.5,7.44-4.51h15.21c-.78,3.06-2.19,5.82-4.22,8.27-2.03,2.45-4.58,4.37-7.64,5.76-3.06,1.39-6.49,2.09-10.28,2.09-4.57,0-8.63-.97-12.2-2.92-3.57-1.95-6.35-4.73-8.35-8.36-2.01-3.62-3.01-7.85-3.01-12.7s.99-9.08,2.97-12.7c1.98-3.62,4.75-6.4,8.31-8.36,3.56-1.95,7.66-2.92,12.28-2.92s8.52.95,12.03,2.84c3.51,1.89,6.25,4.6,8.23,8.1,1.98,3.51,2.97,7.6,2.97,12.28,0,1.34-.08,2.73-.25,4.18Zm-14.37-7.94c0-2.45-.84-4.4-2.51-5.85-1.67-1.45-3.76-2.17-6.27-2.17s-4.41.7-6.06,2.09c-1.64,1.39-2.66,3.37-3.05,5.93h17.88Z" />
          <path d="m212.54,292.88c2.51-1.48,5.29-2.21,8.35-2.21v15.12h-3.93c-3.57,0-6.24.77-8.02,2.3-1.78,1.53-2.67,4.22-2.67,8.06v21.64h-14.29v-46.62h14.29v7.77c1.67-2.56,3.76-4.58,6.27-6.06Z" />
          <path d="m236.65,335.53c-3.65-1.95-6.52-4.73-8.61-8.36-2.09-3.62-3.13-7.85-3.13-12.7s1.06-9.01,3.17-12.66c2.12-3.65,5.01-6.45,8.69-8.4,3.68-1.95,7.8-2.92,12.37-2.92s8.69.97,12.37,2.92c3.68,1.95,6.57,4.75,8.69,8.4,2.12,3.65,3.17,7.87,3.17,12.66s-1.07,9.01-3.22,12.66c-2.14,3.65-5.07,6.45-8.77,8.4-3.7,1.95-7.84,2.92-12.41,2.92s-8.68-.97-12.32-2.92Zm19.3-12.45c1.92-2,2.88-4.87,2.88-8.6s-.93-6.6-2.8-8.61c-1.87-2.01-4.16-3.01-6.89-3.01s-5.1.99-6.94,2.97c-1.84,1.98-2.76,4.86-2.76,8.65s.9,6.6,2.72,8.6c1.81,2.01,4.08,3.01,6.81,3.01s5.06-1,6.98-3.01Z" />
          <path d="m295.26,275.96v61.83h-14.29v-61.83h14.29Z" />
          <path d="m314.51,335.53c-3.65-1.95-6.52-4.73-8.61-8.36-2.09-3.62-3.13-7.85-3.13-12.7s1.06-9.01,3.17-12.66c2.12-3.65,5.01-6.45,8.69-8.4,3.68-1.95,7.8-2.92,12.37-2.92s8.69.97,12.37,2.92c3.68,1.95,6.57,4.75,8.69,8.4,2.12,3.65,3.17,7.87,3.17,12.66s-1.07,9.01-3.22,12.66c-2.14,3.65-5.07,6.45-8.77,8.4-3.7,1.95-7.84,2.92-12.41,2.92s-8.68-.97-12.32-2.92Zm19.3-12.45c1.92-2,2.88-4.87,2.88-8.6s-.93-6.6-2.8-8.61c-1.87-2.01-4.16-3.01-6.89-3.01s-5.1.99-6.94,2.97c-1.84,1.98-2.76,4.86-2.76,8.65s.9,6.6,2.72,8.6c1.81,2.01,4.08,3.01,6.81,3.01s5.06-1,6.98-3.01Z" />
          <path d="m384.82,325.67v12.12h-7.27c-5.18,0-9.22-1.27-12.12-3.8-2.9-2.53-4.34-6.67-4.34-12.41v-18.55h-5.68v-11.86h5.68v-11.36h14.29v11.36h9.36v11.86h-9.36v18.71c0,1.39.33,2.4,1,3.01.67.61,1.78.92,3.34.92h5.1Z" />
          <path d="m436.45,317.9h-32.33c.22,2.9,1.15,5.11,2.8,6.64,1.64,1.53,3.66,2.3,6.06,2.3,3.56,0,6.04-1.5,7.43-4.51h15.21c-.78,3.06-2.19,5.82-4.22,8.27-2.03,2.45-4.58,4.37-7.64,5.76-3.06,1.39-6.49,2.09-10.28,2.09-4.57,0-8.63-.97-12.2-2.92-3.57-1.95-6.35-4.73-8.36-8.36-2.01-3.62-3.01-7.85-3.01-12.7s.99-9.08,2.97-12.7c1.98-3.62,4.75-6.4,8.31-8.36,3.56-1.95,7.66-2.92,12.28-2.92s8.52.95,12.03,2.84c3.51,1.89,6.25,4.6,8.23,8.1,1.98,3.51,2.97,7.6,2.97,12.28,0,1.34-.08,2.73-.25,4.18Zm-14.37-7.94c0-2.45-.84-4.4-2.51-5.85-1.67-1.45-3.76-2.17-6.27-2.17s-4.41.7-6.06,2.09c-1.64,1.39-2.66,3.37-3.05,5.93h17.88Z" />
          <path d="m444.76,336.24c-1.59-1.48-2.38-3.3-2.38-5.47s.79-4.09,2.38-5.6c1.59-1.5,3.63-2.26,6.14-2.26s4.47.75,6.06,2.26c1.59,1.5,2.38,3.37,2.38,5.6s-.79,4-2.38,5.47c-1.59,1.48-3.61,2.21-6.06,2.21s-4.55-.74-6.14-2.21Z" />
          <path d="m467.91,301.78c1.98-3.62,4.73-6.4,8.27-8.36,3.54-1.95,7.59-2.92,12.16-2.92,5.85,0,10.74,1.53,14.66,4.59,3.93,3.06,6.5,7.38,7.73,12.95h-15.21c-1.28-3.56-3.76-5.35-7.44-5.35-2.62,0-4.71,1.02-6.27,3.05-1.56,2.03-2.34,4.94-2.34,8.73s.78,6.7,2.34,8.73c1.56,2.03,3.65,3.05,6.27,3.05,3.68,0,6.15-1.78,7.44-5.35h15.21c-1.23,5.46-3.82,9.75-7.77,12.87-3.96,3.12-8.83,4.68-14.62,4.68-4.57,0-8.62-.97-12.16-2.92-3.54-1.95-6.29-4.73-8.27-8.36-1.98-3.62-2.97-7.85-2.97-12.7s.99-9.08,2.97-12.7Z" />
          <path d="m527.23,335.53c-3.65-1.95-6.52-4.73-8.61-8.36-2.09-3.62-3.13-7.85-3.13-12.7s1.06-9.01,3.18-12.66c2.12-3.65,5.01-6.45,8.69-8.4,3.68-1.95,7.8-2.92,12.37-2.92s8.69.97,12.36,2.92c3.68,1.95,6.57,4.75,8.69,8.4,2.12,3.65,3.17,7.87,3.17,12.66s-1.07,9.01-3.22,12.66c-2.15,3.65-5.07,6.45-8.77,8.4-3.71,1.95-7.84,2.92-12.41,2.92s-8.68-.97-12.32-2.92Zm19.3-12.45c1.92-2,2.88-4.87,2.88-8.6s-.93-6.6-2.8-8.61c-1.87-2.01-4.16-3.01-6.89-3.01s-5.1.99-6.94,2.97c-1.84,1.98-2.76,4.86-2.76,8.65s.91,6.6,2.72,8.6c1.81,2.01,4.08,3.01,6.81,3.01s5.05-1,6.98-3.01Z" />
          <path d="m644.86,295.93c3.42,3.51,5.14,8.38,5.14,14.62v27.24h-14.2v-25.32c0-3.01-.79-5.33-2.38-6.98s-3.77-2.46-6.56-2.46-4.97.82-6.56,2.46c-1.59,1.64-2.38,3.97-2.38,6.98v25.32h-14.2v-25.32c0-3.01-.79-5.33-2.38-6.98-1.59-1.64-3.77-2.46-6.56-2.46s-4.97.82-6.56,2.46c-1.59,1.64-2.38,3.97-2.38,6.98v25.32h-14.29v-46.62h14.29v5.85c1.45-1.95,3.34-3.49,5.68-4.64,2.34-1.14,4.98-1.71,7.94-1.71,3.51,0,6.64.75,9.4,2.26,2.76,1.5,4.91,3.65,6.48,6.43,1.61-2.56,3.81-4.65,6.6-6.27,2.78-1.61,5.82-2.42,9.11-2.42,5.79,0,10.4,1.75,13.83,5.26Z" />
        </g>
        <g id="Symbol">
          <polygon points="320.35 110.74 271.91 62.29 271.91 48.45 320.35 0 368.8 48.45 368.8 62.29 320.35 110.74" />
          <polygon points="382.64 173.02 334.19 124.58 334.19 110.74 382.64 62.29 431.09 110.74 431.09 124.58 382.64 173.02" />
          <polygon points="320.35 235.31 271.91 186.87 271.91 173.02 320.35 124.58 368.8 173.02 368.8 186.87 320.35 235.31" />
          <path d="m230.38,145.34l27.68,27.68,27.68-27.68c15.29-15.29,15.29-40.08,0-55.37h0c-15.29-15.29-40.08-15.29-55.37,0h0c-15.29,15.29-15.29,40.08,0,55.37Zm10.83-27.68c0-9.31,7.54-16.85,16.85-16.85,9.31,0,16.85,7.54,16.85,16.85,0,9.31-7.54,16.85-16.85,16.85-9.31,0-16.85-7.54-16.85-16.85Z" />
        </g>
      </g>
    </svg>
  );
};

const Agent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49.733"
      height="49.733"
      viewBox="0 0 49.733 49.733"
      {...props}
    >
      <path
        id="_76118fd6a76815097837b4fcba75a59f"
        data-name="76118fd6a76815097837b4fcba75a59f"
        d="M26.867,2A24.867,24.867,0,1,0,51.733,26.867,24.895,24.895,0,0,0,26.867,2ZM41.992,41.216a16.87,16.87,0,0,0-30.236.016A20.623,20.623,0,0,1,5.979,26.867a20.888,20.888,0,1,1,41.776,0,20.625,20.625,0,0,1-5.763,14.349ZM26.867,11.947A8.952,8.952,0,1,0,35.819,20.9,8.952,8.952,0,0,0,26.867,11.947Z"
        transform="translate(-2 -2)"
      />
    </svg>
  );
};

const Search = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="39.585"
      height="52.316"
      viewBox="0 0 39.585 52.316"
      fill={fill}
      {...rest}
    >
      <defs>
        <clipPath>
          <rect
            data-name="Rectángulo 76"
            width="39.585"
            height="52.316"
            transform="translate(0 0)"
            fill="none"
          />
        </clipPath>
      </defs>
      <g data-name="Grupo 46" transform="translate(0 0)">
        <g data-name="Grupo 45" clipPath="url(#clip-path)">
          <path
            data-name="Trazado 41"
            d="M21.746,1.55H7.132A5.632,5.632,0,0,0,1.5,7.182v38a5.632,5.632,0,0,0,5.632,5.632H32.453a5.633,5.633,0,0,0,5.632-5.632V16.406Z"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            data-name="Trazado 42"
            d="M21.692,1.5V13.687a3.938,3.938,0,0,0,3.642,3.642l12.752-.923Z"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            data-name="Trazado 43"
            d="M27.253,32.355a8.777,8.777,0,1,1-8.777-8.777A8.777,8.777,0,0,1,27.253,32.355Z"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <line
            data-name="Línea 21"
            x1="5.331"
            y1="4.872"
            transform="translate(24.557 38.678)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </g>
    </svg>
  );
};

const Correduria = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="75.459"
      height="50.087"
      viewBox="0 0 75.459 50.087"
      fill={fill}
      {...rest}
    >
      <defs>
        <clipPath>
          <rect
            data-name="Rectángulo 67"
            width="75.459"
            height="50.087"
            transform="translate(0 0)"
            fill="none"
          />
        </clipPath>
      </defs>
      <g data-name="Grupo 29" transform="translate(0 0)">
        <g data-name="Grupo 28" clipPath="url(#clip-path)">
          <path
            data-name="Trazado 26"
            d="M1.5,10.4H13.925S22.3-.214,32.913,1.74"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            data-name="Trazado 27"
            d="M73.959,10.4H61.394S49.806-5.481,36.962,5.948L25.234,16.539s-4.018,4.381,0,8.8c2.959,3.251,7.978,2.017,10.471-.7,2.545-2.769,8.517-8.1,8.517-8.1"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
                        data-name="Trazado 28"
            d="M2.757,36.364h9.075s5.724-.279,8.935,6.283c0,0,6.714,11.245,13.681,2.792,0,0,11.448,6.7,11.727-4.887a7.069,7.069,0,0,0,8.378.7c5.023-2.961.558-9.074.558-9.074L42.995,17.644"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <line
            data-name="Línea 6"
            x1="12.939"
            transform="translate(56.632 36.135)"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </g>
    </svg>
  );
};

const Publicidad = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="68.192" height="53.389" viewBox="0 0 68.192 53.389"
        fill={fill}
            {...rest}
        >
        <defs>
          <clipPath id="clipPath">
            <rect data-name="Rectángulo 69" width="68.192" height="53.389" transform="translate(0 0)" fill="none"/>
          </clipPath>
        </defs>
        <g data-name="Grupo 31" transform="translate(0 0)">
          <g data-name="Grupo 30" clipPath="url(#clip-path)">
            <line data-name="Línea 7" y2="20.774" transform="translate(1.5 16.139)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <line data-name="Línea 8" x1="53.276" y1="13.638" transform="translate(1.5 34.058)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <line data-name="Línea 9" x1="53.916" y2="14.113" transform="translate(1.5 5.515)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <path data-name="Trazado 29" d="M39.8,43.863C38.249,48.171,34.557,51.2,30.25,51.2c-5.708,0-10.335-5.322-10.335-11.887" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <rect data-name="Rectángulo 68" width="6.978" height="50.389" rx="2.326" transform="translate(59.714 1.5)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
          </g>
        </g>
      </svg>
  );
};

const Diseño = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      width="52.007" 
      height="51.516" 
      viewBox="0 0 52.007 51.516"
      fill={fill}
      {...rest}
      >
        <defs>
          <clipPath>
            <rect data-name="Rectángulo 73" width="52.007" height="51.516" transform="translate(0 0)" fill="none"/>
          </clipPath>
        </defs>
        <g data-name="Grupo 42" transform="translate(0 0)">
          <g data-name="Grupo 39">
            <g data-name="Grupo 38" clipPath="url(#clip-path)">
              <line data-name="Línea 16" x1="18.511" y2="37.13" transform="translate(4.846 13.717)" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="3"/>
              <line data-name="Línea 17" x2="4.968" y2="9.965" transform="translate(42.234 40.882)" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="3"/>
            </g>
          </g>
          <line data-name="Línea 18" x2="8.364" y2="16.778" transform="translate(28.691 13.717)" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="3"/>
          <g data-name="Grupo 41">
            <g data-name="Grupo 40" clipPath="url(#clip-path)">
              <path data-name="Trazado 36" d="M35.259,10.756A9.255,9.255,0,1,1,26,1.5a9.256,9.256,0,0,1,9.256,9.256" fill="#fff"/>
              <path data-name="Trazado 37" d="M35.259,10.756A9.255,9.255,0,1,1,26,1.5,9.256,9.256,0,0,1,35.259,10.756Z" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="3"/>
              <path data-name="Trazado 38" d="M50.507,20.419c0,10.292-10.971,18.635-24.5,18.635S1.5,30.711,1.5,20.419" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="3"/>
            </g>
          </g>
        </g>
      </svg>
  );
};

const Peritaje = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="49.106" height="53.814" viewBox="0 0 49.106 53.814"
        fill={fill} {...rest}>
      <defs>
        <clipPath id="clipPath">
          <rect data-name="Rectángulo 70" width="49.106" height="53.814" transform="translate(0 0)" fill="none"/>
        </clipPath>
      </defs>
      <g data-name="Grupo 33" transform="translate(0 0)">
        <g data-name="Grupo 32" clipPath="url(#clip-path)">
          <path data-name="Trazado 30" d="M17.072,32.806l19.937-28.8a5.815,5.815,0,1,1,9.563,6.619l-19.937,28.8L17.406,42.54Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
          <line data-name="Línea 10" x1="9.563" y1="6.62" transform="translate(34.833 7.148)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
          <path data-name="Trazado 31" d="M41.005,29.587V46.115a6.2,6.2,0,0,1-6.2,6.2H7.7a6.2,6.2,0,0,1-6.2-6.2V19.007a6.2,6.2,0,0,1,6.2-6.2H23.06" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
        </g>
      </g>
    </svg>
  );
};

const TramitesMunicipales = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="58.95" height="51.524" viewBox="0 0 58.95 51.524"
        fill={fill} {...rest}>
        <defs>
          <clipPath>
            <rect data-name="Rectángulo 71" width="58.95" height="51.524" transform="translate(0 0)" fill="none"/>
          </clipPath>
        </defs>
        <g data-name="Grupo 35" transform="translate(0 0)">
          <g data-name="Grupo 34" clipPath="url(#clip-path)">
            <circle data-name="Elipse 10" cx="3.652" cy="3.652" r="3.652" transform="translate(26.277 10.724)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <path data-name="Trazado 32" d="M50.484,22.722V42.69H9.326V22.722" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <line data-name="Línea 11" y2="19.968" transform="translate(36.833 22.722)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <line data-name="Línea 12" y2="19.968" transform="translate(22.774 22.722)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <line data-name="Línea 13" x1="49.41" transform="translate(5.251 50.024)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <path data-name="Trazado 33" d="M54.554,18.028H4.4a2.9,2.9,0,1,1,0-5.791L29.905,1.5,54.554,12.237a2.9,2.9,0,1,1,0,5.791Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
          </g>
        </g>
      </svg>
  );
};

const EstudioFinanciero = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="57.82" height="51.475" viewBox="0 0 57.82 51.475"
        fill={fill} {...rest}>
        <defs>
          <clipPath>
            <rect data-name="Rectángulo 75" width="57.82" height="51.475" transform="translate(0 0)" fill="none"/>
          </clipPath>
        </defs>
        <g data-name="Grupo 44" transform="translate(0 0)">
          <g data-name="Grupo 43" clipPath="url(#clip-path)">
            <path data-name="Trazado 39" d="M52.761,6.355V28.74a5.088,5.088,0,0,1-5.087,5.088H10.195A5.088,5.088,0,0,1,5.108,28.74V6.355" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <path data-name="Trazado 40" d="M38.832,49.975l-9.9-9.272V33.828" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <line data-name="Línea 19" y1="9.272" x2="9.692" transform="translate(19.243 40.703)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <line data-name="Línea 20" x2="54.82" transform="translate(1.5 1.5)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
          </g>
        </g>
      </svg>
  );
};

const EstudioPrecios = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="54.211" height="49.262" viewBox="0 0 54.211 49.262"
          fill={fill} {...rest}
          >
          <defs>
            <clipPath>
              <rect data-name="Rectángulo 72" width="54.211" height="49.262" transform="translate(0 0)" fill="none"/>
            </clipPath>
          </defs>
          <g data-name="Grupo 37" transform="translate(0 0)">
            <g data-name="Grupo 36" clipPath="url(#clip-path)">
              <path data-name="Trazado 34" d="M0,36.684H6.815l4.58-3.621a10.25,10.25,0,0,1,6.07-2.372H31.624a3,3,0,0,1,0,5.993H25.713s-2.5-.106-2.6,1.6,2.6,1.7,2.6,1.7h10.92l11.195-8.349a2.972,2.972,0,0,1,4.182.423l.03.037a2.971,2.971,0,0,1-.422,4.182l-10.725,8.5a14.574,14.574,0,0,1-8.413,2.982H0" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="3"/>
              <path data-name="Trazado 35" d="M32.31,16.523a6.79,6.79,0,1,1-.394-9.337" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="3"/>
              <line data-name="Línea 14" y1="5.272" transform="translate(27.154 0)" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="3"/>
              <line data-name="Línea 15" y1="5.272" transform="translate(27.154 18.851)" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="3"/>
            </g>
          </g>
        </svg>
  );
};

const TramitesBancarios = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="58.95" height="51.524" viewBox="0 0 58.95 51.524"  fill={fill} {...rest}>
      <defs>
        <clipPath id="clipPath">
          <rect data-name="Rectángulo 77" width="58.95" height="51.524" transform="translate(0 0)" fill="none"/>
        </clipPath>
      </defs>
      <g data-name="Grupo 49" transform="translate(0 0)">
        <path data-name="Trazado 44" d="M50.484,22.722V42.69H9.326V22.722" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
        <line data-name="Línea 22" y2="19.968" transform="translate(36.833 22.722)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
        <line data-name="Línea 23" y2="19.968" transform="translate(22.774 22.722)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
        <g data-name="Grupo 48">
          <g data-name="Grupo 47" clipPath="url(#clip-path)">
            <line data-name="Línea 24" x1="49.41" transform="translate(5.251 50.024)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            <path data-name="Trazado 45" d="M54.554,18.028H4.4a2.9,2.9,0,1,1,0-5.791L29.905,1.5,54.554,12.237a2.9,2.9,0,1,1,0,5.791Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
          </g>
        </g>
      </g>
    </svg>
  );
};


const Mide = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20.814" height="22.809" viewBox="0 0 20.814 22.809"
      fill={fill} {...rest}>
      <defs>
        <clipPath id="clipPath">
          <rect data-name="Rectángulo 70" width="20.814" height="22.809" fill="none" stroke={fill} strokeWidth="1"/>
        </clipPath>
      </defs>
      <g data-name="Grupo 67" transform="translate(0 0)">
        <g data-name="Grupo 32" transform="translate(0 0)" clipPath="url(#clip-path)">
          <path data-name="Trazado 30" d="M17.072,14.769l8.45-12.207a2.465,2.465,0,1,1,4.053,2.805l-8.45,12.207-3.912,1.32Z" transform="translate(-9.836 -0.864)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
          <line id="Línea_10" data-name="Línea 10" x1="4.053" y1="2.806" transform="translate(14.764 3.03)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
          <path data-name="Trazado 31" d="M18.244,19.921v7.005a2.628,2.628,0,0,1-2.627,2.628H4.127A2.628,2.628,0,0,1,1.5,26.926V15.437A2.627,2.627,0,0,1,4.127,12.81h6.511" transform="translate(-0.864 -7.381)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
        </g>
      </g>
    </svg>  
  );
};

const Suelo = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg data-name="Group 86" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="21.542" height="21.971" viewBox="0 0 21.542 21.971"
    fill={fill} {...rest}>
    <defs>
      <clipPath id="clipPath">
        <rect data-name="Rectangle 150" width="21.542" height="21.971" transform="translate(0 0)" fill="none" stroke="#707070" strokeWidth="1"/>
      </clipPath>
    </defs>
    <g data-name="Group 85" transform="translate(0 0)" clipPath="url(#clip-path)">
      <path data-name="Path 73" d="M26.66,5.851S29.723.405,35.85,1.7a.979.979,0,0,1,.775.933c.052,1.945-.473,7.115-7.213,9.086" transform="translate(-15.702 -0.883)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
      <path data-name="Path 74" d="M12.514,25.651v-9.6c-.061-.489-.36-2.124-.36-2.124C9.739,7.334,4.545,7.154,2.608,7.335a1.022,1.022,0,0,0-.88.836c-2.065,9.206,10.581,9.98,10.581,9.98" transform="translate(-0.884 -4.297)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
    </g>
  </svg>   
  );
};

const Topografia = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16"
      fill={fill} {...rest}>
      <g data-name="Grupo 77" transform="translate(-725.75 -648)">
        <g data-name="Polígono 8" transform="translate(730.75 648)" fill="#f5f2f2">
          <path d="M 17.14507484436035 15.5 L 0.8549256324768066 15.5 L 9 1.019867777824402 L 17.14507484436035 15.5 Z" stroke={fill}/>
          <path d="M 9 2.039735794067383 L 1.709850311279297 15 L 16.2901496887207 15 L 9 2.039735794067383 M 9 0 L 18 16 L 0 16 L 9 0 Z" stroke={fill} fill="#5fbf38"/>
        </g>
        <g data-name="Polígono 9" transform="translate(725.75 651)" fill="#f5f2f2">
          <path d="M 13.16288661956787 12.5 L 0.837113082408905 12.5 L 7 1.054638624191284 L 13.16288661956787 12.5 Z" stroke={fill}/>
          <path d="M 7 2.109258651733398 L 1.674216270446777 12 L 12.32578372955322 12 L 7 2.109258651733398 M 7 0 L 14 13 L 0 13 L 7 0 Z" stroke={fill} fill="#5fbf38"/>
        </g>
      </g>
    </svg>
  );
};

const Alquiler = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="9.552" viewBox="0 0 23.242 9.552"
      fill={fill} {...rest}>
      <g data-name="Grupo 84" transform="translate(-557.258 -756.385)">
        <g data-name="Elipse 13" transform="translate(557.258 756.385)" fill="none" stroke={fill} strokeWidth="1">
          <ellipse cx="4.776" cy="4.776" rx="4.776" ry="4.776" stroke="none"/>
          <ellipse cx="4.776" cy="4.776" rx="4.276" ry="4.276" fill="none"/>
        </g>
        <line data-name="Línea 30" x2="14.509" transform="translate(565.991 761.161)" fill="none" stroke={fill} strokeWidth="1"/>
        <line data-name="Línea 32" y2="4.776" transform="translate(579.969 761.155)" fill="none" stroke={fill} strokeWidth="1"/>
        <line data-name="Línea 33" y2="4.776" transform="translate(576.012 761.161)" fill="none" stroke={fill} strokeWidth="1"/>
      </g>
    </svg>
  );
};

const Servicios = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10.4" height="22.568" viewBox="0 0 10.4 22.568"
      fill={fill} {...rest}>
      <path data-name="Trazado 72" d="M817.074,3630.916l-8.5,11.833h8.5l-6.664,10.17" transform="translate(-807.599 -3630.624)" fill="none" stroke={fill} strokeWidth="1"/>
    </svg>
  );
};

const Star = ({ fill, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18.845" height="17.978" viewBox="0 0 18.845 17.978"
      fill={fill} {...rest}>
      <defs>
        <clipPath id="clipPath">
          <rect data-name="Rectángulo 139" width="18.845" height="17.978" fill="none" stroke="#707070" strokeWidth="1"/>
        </clipPath>
      </defs>
      <g data-name="Grupo 69" transform="translate(0 0)">
        <g data-name="Grupo 68" transform="translate(0 0)" clipPath="url(#clip-path)">
          <path data-name="Trazado 66" d="M10.36,1.5l2.091,6.438h6.769l-5.476,3.978,2.091,6.438L10.36,14.375,4.884,18.353l2.091-6.438L1.5,7.938H8.269Z" transform="translate(-0.937 -0.938)" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
        </g>
      </g>
    </svg>
  );
};


export const Icons = {
  Logo,
  LogoSymbol,
  LogoStacked,
  Agent,
  Search,
  Correduria,
  Diseño,
  Peritaje,
  TramitesMunicipales,
  EstudioFinanciero,
  EstudioPrecios,
  TramitesBancarios,
  Mide,
  Suelo,
  Topografia,
  Alquiler,
  Servicios,
  Star,
  Publicidad
};
