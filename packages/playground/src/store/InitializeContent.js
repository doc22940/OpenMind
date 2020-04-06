import * as ContentTypes from '../contentTypes';

const {
  Text,
  URLEntity,
  VideoYouTube,
  StandardSpace,
} = ContentTypes

export function BestContentType (content) {
  /**
   * Gets the Best Content Type for given content
   */
  let types = new Set(content.meta.is);
  if (types.has('StandardSpace')) return StandardSpace;

  if (types.has('Text')) return Text;
  if (types.has('URLEntity')) return URLEntity;
  if (types.has('VideoYouTube')) return VideoYouTube;
}

export function InitializeContent (content) {
  /**
   * Initializes content with the best content type
   */
  let BestType = BestContentType(content);
  return new BestType(content);
}