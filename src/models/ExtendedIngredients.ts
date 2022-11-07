export default interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: string; // not a url
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
}
