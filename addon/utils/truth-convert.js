import { isArray } from '@ember/array';
import { get } from '@ember/object';

export default function truthConvert(result) {
  if (isArray(result)) {
    return get(result, 'length') !== 0;
  } else {
    return !!result;
  }
}