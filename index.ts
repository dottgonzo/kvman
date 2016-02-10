import * as Promise from bluebird;


enum EHypervisor {
    kvm,
    virtualbox,
    vmware
}

enum EArch {
    kvm,
    virtualbox,
    vmware
}



enum EFlavour {
    Ubuntu,
    Fedora,
    Centos,
    AlpineLinux,
    ElCapitan,
    Leopard,
    SnowLeopard,
    XP,
    Vista,
    Seven,
    Eigth,
    Ten

}

enum EVersion {
    "15.ten",
    "15.four",
    "14.four",
    latest,
    stable,
    release
}

enum EOS {

    Linux,
    Osx,
    Bsd,
    Windows

}

interface IAudioCard {

}

interface IDisplay {

}

enum EFrameworks {

    php,
    rails,
    html,
    nodejs

}

interface IDestination {

    destType: EDestType,
    address: string,
    verify: boolean,
    shrink: boolean

}



interface IFilecopy {
    source: string;
    dest: string;
}

interface IPartitions {
    size: number;
    mount: string;
    rw: boolean;
    source?: string;

}

interface IDaemons {
    exec: string;
    options: string[];
}
interface INetworks {
    device: string;
    gateway: string;
    address: string;
    dns: string;
}
enum EDestType {
    file,
    repository,
    disk
}

enum ESoftwareType {
    git,
    svn,
    file,
    tarball
}

interface IDeploy {

    Type: ESoftwareType;
    source: string;
    options?: {
        dest?: string
    };
    scripts?: string[];
    bootExec?: string[];
    shell?: string;
}

interface ICreateConfiguration {

    hypervisor: EHypervisor;

    arch: EArch;
    partitons?: IPartitions[];
    boot: string;
    networks?: INetworks[];
    audio?: IAudioCard,
    display?: IDisplay,
    mice: boolean;
    os: {
        type: EOS;
        flavour: EFlavour;
        version: EVersion;
        source: {
            iso: string,
            tarball?: string;
            link?: string;
        };

        platform: {
            id_rsa: string;
            uid: string;
            user: string;
            install: {
                frameworks?: EFrameworks[];
                dependencies?: string[];
                copy: IFilecopy[];
                daemons: IDaemons[];
                scripts: string[];
            };


        };

    };



}


export = class {
    constructor(config){
        
    }
    create(file: string, configuration: ICreateConfiguration) {

    }
    fork(source: string, deploy: IDeploy[]) {

    }
    run(source: string, configuration?: IDeploy[]) {

    }
    listlocal() {

    }
    listremote() {

    }
    listrunning() {

    }

}