// Types
import type { ISurveyContext, IQuestion } from '@Types';
export default function findMatchingElements(array1: ISurveyContext[], array2: IQuestion[]) {
  return array1.filter(item1 => array2.some(item2 => item2.id === item1.id));
}
