import GenericSpace from './GenericSpace.component';

import StandardSpaceComponent from '@/components/StandardSpace';

export default class StandardSpace extends GenericSpace {
  component = StandardSpaceComponent;
  componentStyle = "height:100vh;width:100vw";
  constructor(config) {
    // validate config against StandardSpaceSchema
    super(config);
  }
  get type() {
    return ['Space', 'StandardSpace'];
  }
  get content() {
    // return all content belonging to this space, coupled with the metadata
    /*
    return {
      [id]: {
        element: <content>
        position: {x, y}
      }
    }
     */
    return this._config.data.content;
  }
  set content(_content) {
    // sets all content data
  }
  setContentById(id, content) {
    // sets content belonging to id
  }
  get data() {
    return {
      content: this.content
    }
  }
  load() {
    // create a graph instance
    // Go through each id, {element, position} pair in this.content and position them on the graph
  }
  unload() {
    // unload the graph
  }
}