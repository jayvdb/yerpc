// AUTO-GENERATED by typescript-type-def
//
// simon: actually it's not autogenerated from what I can tell,
// I had to manually copy it from yerpc/typescript/generated/jsonrpc.ts

export type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
export type Params = JSONValue[] | Record<string, JSONValue>;
export type U32 = number;
export type Id = U32 | string;
export type Request = {
  jsonrpc: "2.0";
  method: string;
  params?: Params;
  id?: Id;
};
export type I32 = number;
export type Error = { code: I32; message: string; data?: JSONValue };
export type Response = {
  jsonrpc: "2.0";
  id: Id | null;
  result?: JSONValue;
  error?: Error;
};
export type Message = Request | Response;
