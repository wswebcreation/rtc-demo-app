import {CardComponent} from './components/card.component';


export class HeroesDetailPage {
  /**
   * Get the top heroes detail card component
   * @returns {CardComponent}
   */
  public static get detail(): CardComponent {
    return new CardComponent();
  }
}
