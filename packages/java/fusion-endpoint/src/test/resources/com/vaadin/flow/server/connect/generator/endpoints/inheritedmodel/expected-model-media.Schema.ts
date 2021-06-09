import ExternalDocumentation from '../ExternalDocumentation';
import Discriminator from './Discriminator';
import XML from './XML';

/**
 * This module is generated from io.swagger.v3.oas.models.media.Schema.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 */
export default interface Schema {
  ref?: string;
  _default?: any;
  _enum?: Array<any | undefined>;
  additionalProperties?: any;
  deprecated?: boolean;
  description?: string;
  discriminator?: Discriminator;
  example?: any;
  exclusiveMaximum?: boolean;
  exclusiveMinimum?: boolean;
  extensions?: Record<string, any | undefined>;
  externalDocs?: ExternalDocumentation;
  format?: string;
  maxItems?: number;
  maxLength?: number;
  maxProperties?: number;
  maximum?: number;
  minItems?: number;
  minLength?: number;
  minProperties?: number;
  minimum?: number;
  multipleOf?: number;
  name?: string;
  not?: Schema;
  nullable?: boolean;
  pattern?: string;
  properties?: Record<string, Schema | undefined>;
  readOnly?: boolean;
  required?: Array<string | undefined>;
  title?: string;
  type?: string;
  uniqueItems?: boolean;
  writeOnly?: boolean;
  xml?: XML;
}
