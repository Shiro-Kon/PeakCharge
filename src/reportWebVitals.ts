import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getLCP, getFID, getCLS }) => {
      getLCP(onPerfEntry);
      getFID(onPerfEntry);
      getCLS(onPerfEntry);
    });
  }
};

export { reportWebVitals };