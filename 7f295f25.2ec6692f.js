(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(7),o=(t(0),t(243)),i={id:"job",sidebar_label:"Job Configuration",hide_title:!0},c={unversionedId:"configure_hydra/job",id:"configure_hydra/job",isDocsHomePage:!1,title:"job",description:"Job configuration",source:"@site/docs/configure_hydra/job.md",slug:"/configure_hydra/job",permalink:"/docs/next/configure_hydra/job",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/configure_hydra/job.md",version:"current",lastUpdatedBy:"Kaiyu Yang",lastUpdatedAt:1607997405,sidebar_label:"Job Configuration",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/configure_hydra/intro"},next:{title:"Customizing logging",permalink:"/docs/next/configure_hydra/logging"}},b=[{value:"Job configuration",id:"job-configuration",children:[]},{value:"Documentation",id:"documentation",children:[{value:"hydra.job.name",id:"hydrajobname",children:[]},{value:"hydra.job.override_dirname",id:"hydrajoboverride_dirname",children:[]},{value:"hydra.job.id",id:"hydrajobid",children:[]},{value:"hydra.job.num",id:"hydrajobnum",children:[]},{value:"hydra.job.config_name",id:"hydrajobconfig_name",children:[]},{value:"hydra.job.env_set",id:"hydrajobenv_set",children:[]},{value:"hydra.job.env_copy",id:"hydrajobenv_copy",children:[]}]}],l={rightToc:b};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"job-configuration"},"Job configuration"),Object(o.b)("p",null,"The job configuration resides in ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.job"),".\nThe structure definition is below, the latest definition ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/hydra/conf/__init__.py"}),"in the code"),"."),Object(o.b)("details",null,Object(o.b)("summary",null,"Expand definition"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'# job runtime information will be populated here\n@dataclass\nclass JobConf:\n    # Job name, populated automatically unless specified by the user (in config or cli)\n    name: str = MISSING\n\n    # Concatenation of job overrides that can be used as a part\n    # of the directory name.\n    # This can be configured in hydra.job.config.override_dirname\n    override_dirname: str = MISSING\n\n    # Job ID in underlying scheduling system\n    id: str = MISSING\n\n    # Job number if job is a part of a sweep\n    num: int = MISSING\n\n    # The config name used by the job\n    config_name: Optional[str] = MISSING\n\n    # Environment variables to set remotely\n    env_set: Dict[str, str] = field(default_factory=dict)\n    # Environment variables to copy from the launching machine\n    env_copy: List[str] = field(default_factory=list)\n\n    # Job config\n    @dataclass\n    class JobConfig:\n        @dataclass\n        # configuration for the ${hydra.job.override_dirname} runtime variable\n        class OverrideDirname:\n            kv_sep: str = "="\n            item_sep: str = ","\n            exclude_keys: List[str] = field(default_factory=list)\n\n        override_dirname: OverrideDirname = OverrideDirname()\n\n    config: JobConfig = JobConfig()\n'))),Object(o.b)("h2",{id:"documentation"},"Documentation"),Object(o.b)("h3",{id:"hydrajobname"},"hydra.job.name"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/configure_hydra/job_name"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})))),Object(o.b)("p",null,"The job name is used by different things in Hydra, such as the log file name (",Object(o.b)("inlineCode",{parentName:"p"},"${hydra.job.name}.log"),").\nIt is normally derived from the Python file name (file: ",Object(o.b)("inlineCode",{parentName:"p"},"train.py")," -> name: ",Object(o.b)("inlineCode",{parentName:"p"},"train"),").\nYou can override it via the command line or your config file. "),Object(o.b)("h3",{id:"hydrajoboverride_dirname"},"hydra.job.override_dirname"),Object(o.b)("p",null,"This field is populated automatically using your command line arguments and is typically being used as a part of your\noutput directory pattern.\nFor example, the command line arguments:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ python foo.py a=10 b=20\n")),Object(o.b)("p",null,"Would result in ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.job.override_dirname")," getting the value a=10,b=20.\nWhen used with the output directory override, it can automatically generate directories that represent the\ncommand line arguments used in your run.   "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")),Object(o.b)("p",null,"The generation of override_dirname can be controlled by ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname"),".\nIn particular, the separator char ",Object(o.b)("inlineCode",{parentName:"p"},"=")," and the item separator char ",Object(o.b)("inlineCode",{parentName:"p"},",")," can be modified, and in addition some command line\noverride keys can be automatically excluded from the generated ",Object(o.b)("inlineCode",{parentName:"p"},"override_dirname"),".\nAn example of a case where the exclude is useful is a random seed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}/seed=${seed}\n  job:\n    config:\n      override_dirname:\n        exclude_keys:\n          - seed\n")),Object(o.b)("p",null,"With this configuration, running"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ python foo.py a=10 b=20 seed=999\n")),Object(o.b)("p",null,"Would result in a directory like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"output/a=10,b=20/seed=999\n")),Object(o.b)("p",null,"Allowing you to more easily group identical runs with different random seeds together."),Object(o.b)("h3",{id:"hydrajobid"},"hydra.job.id"),Object(o.b)("p",null,"The job ID is populated by active Hydra launcher. For the basic launcher, the job ID is just a serial job number, but\nfor other systems this could be the SLURM job ID or the AWS Instance ID."),Object(o.b)("h3",{id:"hydrajobnum"},"hydra.job.num"),Object(o.b)("p",null,"Serial job number within this current sweep run. (0 to n-1)"),Object(o.b)("h3",{id:"hydrajobconfig_name"},"hydra.job.config_name"),Object(o.b)("p",null,"The config name used by the job, this is populated automatically to match the config name in @hydra.main()"),Object(o.b)("h3",{id:"hydrajobenv_set"},"hydra.job.env_set"),Object(o.b)("p",null,"A Dict","[str, str]"," that is used to set the environment variables of the running job.\nSome common use cases are to set environment variables that are effecting underlying libraries, for example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  job:\n    env_set:\n      OMP_NUM_THREADS: 1\n")),Object(o.b)("p",null,"Disables multithreading in Intel IPP and MKL."),Object(o.b)("p",null,"Another example, is to use interpolation to automatically set the rank\nfor ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pytorch.org/tutorials/intermediate/dist_tuto.html"}),"Torch Distributed")," run to match the job number\nin the sweep. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  job:\n    env_set:\n      RANK: ${hydra:job.num}\n")),Object(o.b)("h3",{id:"hydrajobenv_copy"},"hydra.job.env_copy"),Object(o.b)("p",null,"In some cases you want to automatically copy local environment variables to the running job environment variables.\nThis is particularly useful for remote runs."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  job:\n    env_copy:\n      - AWS_KEY\n")))}d.isMDXComponent=!0},243:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,p=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return t?a.a.createElement(p,c(c({ref:n},l),{},{components:t})):a.a.createElement(p,c({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);