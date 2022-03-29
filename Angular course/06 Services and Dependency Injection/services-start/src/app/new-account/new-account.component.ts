import { Component } from "@angular/core";

import { LoggingService } from "../logging/logging.service";
import { AccountsService } from "../account.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [],
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accoutsService: AccountsService
  ) {
    this.accoutsService.statusUpdated.subscribe((status: string) =>
      alert(`new status: ${status}`)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accoutsService.addAccount({
      name: accountName,
      status: accountStatus,
    });
    // this.loggingService.logStatusChange(accountStatus);
  }
}
