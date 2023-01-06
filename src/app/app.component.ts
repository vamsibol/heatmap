import { Component } from '@angular/core';
import { CalendarHeatmapService } from './calendar-heatmap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'heatmap';
  constructor(private heatmapService: CalendarHeatmapService) {}
  ngAfterViewInit() {
    setTimeout(() => {
      console.log('Started');
      this.heatmapService.loadCalendarHeatmap();
    }, 1000);
  }
}
