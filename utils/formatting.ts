export function padding(number: number | '---', digits: number, value = '0'): string {
  if (parseInt(`${number}`, 10) >= 10 ** digits) {
    return `${number}`;
  }
  return `${value.repeat(digits)}${number}`.slice(-1 * digits);
}

// This is a centralized place where we have the ability to transform the
// national ID from what is stored in the database to what we want to show the
// to user. This isn't used all the time, but sometimes, when a new game comes
// out, we don't know the national IDs for sure, so we offset them to make the
// update when we do know the real national IDs easier. Most of the time, this
// function will just return the ID again because our database national IDs will
// be correct.
export function nationalId(id: number): number {
  return id;
}

export function pad(number: number) {
	switch (true) {
    case (number<10):
      return `00${number}`;
    case (number>9 && number<100):
      return `0${number}`;
    default:
      return `${number}`;
  }
}
