import {CardComponent} from './components/card.component';


export class HeroesTopPage {
  /**
   * Get the top heroes card component
   * @returns {CardComponent}
   */
  public static get overview(): CardComponent {
    return new CardComponent();
  }
}
