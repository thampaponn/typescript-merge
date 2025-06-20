export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const result: number[] = [];

  let i = collection_1.length - 1; // collection_1 is descending, so reverse traversal
  let j = 0;
  let k = 0;

  while (i >= 0 || j < collection_2.length || k < collection_3.length) {
    const values = [];

    if (i >= 0) values.push({ val: collection_1[i], source: 'i' });
    if (j < collection_2.length) values.push({ val: collection_2[j], source: 'j' });
    if (k < collection_3.length) values.push({ val: collection_3[k], source: 'k' });

    const minItem = values.reduce((prev, curr) => (curr.val < prev.val ? curr : prev));

    result.push(minItem.val);

    if (minItem.source === 'i') i--;
    else if (minItem.source === 'j') j++;
    else if (minItem.source === 'k') k++;
  }

  return result;
}