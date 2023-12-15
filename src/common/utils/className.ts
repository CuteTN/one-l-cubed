type TClassDescriber =
  | string
  | Record<string, boolean>
  | [boolean, string, string]
  | [boolean, string];

export function combineClassNames(...classDescribers: TClassDescriber[]) {
  return classDescribers
    .map((x) => {
      if (typeof x === "string") return x;
      if (Array.isArray(x)) return x[0] ? x[1] : x[2] ?? "";
      return Object.entries(x)
        .map(([k, v]) => (v ? k : ""))
        .join(" ");
    })
    .join(" ");
}
