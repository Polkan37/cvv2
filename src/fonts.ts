import localFont from 'next/font/local';

export const BigShouldersDisplay = localFont({
  src: [
    { path: '../public/fonts/BigShouldersDisplay-Thin.ttf', weight: '200', style: 'thin' },
    { path: '../public/fonts/BigShouldersDisplay-Light.ttf',  weight: '300', style: 'light' },
    { path: '../public/fonts/BigShouldersDisplay-Regular.ttf',    weight: '400', style: 'normal' },
    { path: '../public/fonts/BigShouldersDisplay-Medium.ttf',    weight: '500', style: 'medium' },
    { path: '../public/fonts/BigShouldersDisplay-SemiBold.ttf',    weight: '600', style: 'semiBold' },
    { path: '../public/fonts/BigShouldersDisplay-Bold.ttf',    weight: '700', style: 'bold' },
    { path: '../public/fonts/BigShouldersDisplay-ExtraBold.ttf',    weight: '800', style: 'extraBold' },
    { path: '../public/fonts/BigShouldersDisplay-Black.ttf',    weight: '900', style: 'black' }
  ],
  display: 'swap',
  variable: '--big-shoulders-display'    
});
