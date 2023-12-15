export function convertUppercaseToSnakeCase(s: string): string {
  let result = s[0].toLowerCase();
  for (let i = 1; i < s.length; ++i) {
    let charCode = s.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) result += "_" + s[i].toLowerCase();
    else result += s[i];
  }

  return result;
}