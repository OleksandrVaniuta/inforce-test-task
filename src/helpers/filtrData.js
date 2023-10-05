export function sortData(data) {
  if (data.length === 0) {
    return;
  }

  const sortedData = [...data].sort((a, b) => {
    const countA = parseInt(a.count, 10);
    const countB = parseInt(b.count, 10);
    return countB - countA;
  });

  return sortedData;
}

const filtredData = {
  sortData,
};

export default filtredData;
