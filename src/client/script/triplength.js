const TripLength = (startDate, endDate) => {
    const ONE_DAY_MS = 1000 * 3600 * 24;
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.round((end - start) / ONE_DAY_MS);
};

export { TripLength };