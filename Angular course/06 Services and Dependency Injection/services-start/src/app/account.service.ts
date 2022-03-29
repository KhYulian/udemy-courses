import { EventEmitter, Injectable, Output } from "@angular/core";

import { LoggingService } from "./logging/logging.service";

@Injectable() // tells angular that this service could be injectable

export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  constructor(private loggingService: LoggingService) {}

  addAccount(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
    this.loggingService.logStatusChange(newAccount.status);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }

  @Output() statusUpdated = new EventEmitter<string>()
}
