import type DaggerheartToolsPlugin from "src/main";
import type { Adversary } from "src/types/adversary";
import type { Encounter } from "src/types/encounter";
import { BESTIARY } from "./daggerheart-srd-bestiary";
import type { Environment } from "src/types/environment";
import type { AbilityCard } from "src/types/card";


export interface IRepository<T> {
    state: string;
    load: () => void;
    find: (filter: (item: T) => boolean) => T | undefined;
    filter: (filter: (item: T) => boolean) => T[];
    add: (item: T) => void;
    addRange: (items: T[]) => void;
    update: (key: string, item: T) => void;
    delete: (filter: (item: T) => boolean) => void;
    markCurrent: () => void;
    markDirty: () => void;
    save: () => void;
    subscribe: (callback: (on: string, item: T) => void) => void;
    unsubscribe: (callback: (on: string, item: T) => void) => void;
    notify: (on: string, item: T) => void;
    notifyRange: (on: string, items: T[]) => void;
    exists: (predicate: (item: T) => boolean) => boolean;
}

export abstract class Repository<T> implements IRepository<T> {

    get state(): string { return this._state };
    protected _state: string = 'unset';
    protected data: T[] = [];
    protected _plugin: DaggerheartToolsPlugin;
    protected _callbacks: ((on: string, item: T) => void)[] = [];

    constructor(plugin: DaggerheartToolsPlugin) {
        this._plugin = plugin;
    }

    subscribe = (callback: (on: string, item: T) => void) => this._callbacks.push(callback);
    unsubscribe = (callback: (on: string, item: T) => void) => this._callbacks.remove(callback);

    notify = (on: string, item: T) => {
        this._callbacks.forEach(callback => callback(on, item));
    };

    notifyRange = (on: string, items: T[]) => {
        items.forEach(item => {
            this._callbacks.forEach(callback => callback(on, item));
        })
    };

    markDirty = () => {
        this._state = "dirty";
    };

    abstract save: () => void;

    abstract load: () => void;
    
    find = (predicate: (item: T) => boolean) => {
        return this.data.find(predicate);
    }

    filter = (predicate: (item: T) => boolean) => {
        return this.data.filter(predicate);
    };

    exists = (predicate: (item: T) => boolean) => {
        return this.data.filter(predicate).length > 0;
    };

    add = (item: T) => {
        this.data.push(item);
        this.markDirty();
        this.save();
        this.notify("add", item);
    };

    addRange = (items: T[]) => {
        this.data.push(...items);
        this.markDirty();
        this.save();
        this.notifyRange("add", items);
    };

    update = (key: string, item: T) => {
        let index = this.data.findIndex(a => (a as any)[key] == (item as any)[key]);

        if (index < 0) {
            console.error("Unable to update, key not found.", key, item);
            return;
        }

        this.data[index] = item;
        this.markDirty();

        this.save();
        this.notify("update", item);
    };

    delete = (predicate: (item: T) => boolean) => {
        let item = this.data.find(predicate);
        
        if (item == undefined) {
            return;
        }

        this.data = this.data.filter(predicate);
        this.markDirty();
        this.save();
        this.notify("delete", item);
    };

    markCurrent = () => {
        this._state = 'current';
    };
}

export class AdversaryRepository extends Repository<Adversary> {
    private disableSRD: boolean = false;
    private saved: boolean = false;

    save = async () => {
        this._plugin.settings.adversaries = this.data;
        await this._plugin.saveSettings().then(() => {
            this.markCurrent();
        });
    };
    
    load = async () => {
        await this._plugin.loadData();

        this.disableSRD = this._plugin.settings.disableSRD;
        this.saved = this._plugin.settings.saved;

        if (!this.saved) {
            this.data = Object.assign(this.data, this._plugin.settings.adversaries, BESTIARY);
            this.saved = true;
            this.save();
        } else {
            this.data = Object.assign([], this._plugin.settings.adversaries);
        }

        
        console.log("Loaded", this.data);
        this.markCurrent();
    };
    
}

export class EncounterRepository extends Repository<Encounter> {
    save = async () => {
        this._plugin.settings.encounters = this.data;
        await this._plugin.saveSettings().then(() => {
            this.markCurrent();
        });
    };
    
    load = async () => {
        await this._plugin.loadData();
        this.data = this._plugin.settings.encounters;
        this.markCurrent();
    };
}

export class EnvironmentRepository extends Repository<Environment> {
    save = async () => {
        this._plugin.settings.environments = this.data;
        await this._plugin.saveSettings().then(() => {
            this.markCurrent();
        });
    };
    
    load = async () => {
        await this._plugin.loadData();
        this.data = this._plugin.settings.environments;
        this.markCurrent();
    };
}

export class AbilityCardRepository extends Repository<AbilityCard> {
    save = async () => {
        this._plugin.settings.abilityCards = this.data;
        await this._plugin.saveSettings().then(() => {
            this.markCurrent();
        });
    };
    
    load = async () => {
        await this._plugin.loadData();
        this.data = this._plugin.settings.abilityCards;
        this.markCurrent();
    };
}