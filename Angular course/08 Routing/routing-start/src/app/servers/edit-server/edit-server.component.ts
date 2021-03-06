import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";

import { ServersService } from "../servers.service";
import {
  CanComponentDeactivate,
  CanDeactivateGuard,
} from "./can-deactivate-guard.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaved = false;
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    const id = this.route.snapshot.params.id;

    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params["allowEdit"] === "1" ? true : false;
    });
    this.route.fragment.subscribe((fragment) => {});

    this.server = this.serversService.getServer(id);
    // subscribe route params to update the id if params changed

    this.route.params.subscribe((params: Params) => {
      this.serverName = params.name;
      this.serverStatus = params.status;
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });

    this.changesSaved = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) return true;
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm("Do you want to discard the changes?");
    } else {
      return true;
    }
  }
}
