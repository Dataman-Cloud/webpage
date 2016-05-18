BACKEND_URL = {
    user: {
        login: 'api/v3/auth',
        register: 'api/v3/auth/user/registration',
        active: 'api/v3/auth/user/activation/$active_code',
        sendActiveMail: 'api/v3/auth/user/activation',
        forgotPassword: 'api/v3/auth/password/reseturl',
        resetPassword: 'api/v3/auth/password/$reset_code',
        customerservice: 'api/v3/customerservice_url',
        groupActive: 'api/v3/groups/activation/$active_code'
    },
    version: {
        agent: 'omega-agent',
        app: 'omega-app',
        cluster: 'omega-cluster',
        frontend: 'omega-frontend',
        metrics: 'omega-metrics',
        webpage: 'omega-webpage',
        es: 'omega-es',
        harbor: 'harbor',
        drone: 'drone',
        alert: 'sryun-alert'
    },
    notice: {
        notice: 'api/v3/notice'
    }
};

MESSAGE_CODE = {
    dataInvalid: 10001,
    needActive: 11005
};

CODE_MESSAGE = {
    11006: "已加入用户组！"
}

DOCADDRESS = {
    offline: 'http://offlinedoc.shurenyun.com/',
    online: 'http://doc.shurenyun.com'
};

var home = {
    title: '数人云 - 轻量级PaaS平台',
    keywords: '数人云、数人科技、数人云轻量级 PaaS 平台、数据中心操作系统，云操作系统',
    description: '数人云是基于 Mesos 和 Docker 技术的下一代 DCOS（数据中心操作系统）。'
    + '领先的轻量级 PaaS 平台。'
    + '可部署在公有云或者私有云（IDC）之上，帮助用户在云端快速建立并稳定运维高性能生产环境。'
    + '实现秒级扩容，一键部署，混跑多种应用的能力。'
};

var price = {
    title: '数人云 PaaS 平台报价 企业试用版可免费试用 - 数人云',
    keywords: '数人云报价，数人云企业版，数人云专业版',
    description: '数人云 PaaS 平台专业版报价，企业试用版可免费试用，企业版请拨打电话010-64776698 与我们联系。'
}

var product = {
    title: '基于 Mesos 和 Docker 技术的轻量级 PaaS - 数人云',
    keywords: '数人云，轻量级 PaaS 平台',
    description: '基于Mesos和Docker技术的数人云，可部署在任意公有云、私有云和物理机上。'
    + '可像用单机电脑一样管理集群和云端应用。'
    + '实现秒级扩容，一键部署，混跑多种应用的集群资源管理能力，从而满足企业业务快速增长需求。'
};

var sceneContainerCloud = {
    title: '基于Mesos的企业级容器云 大规模容器生产环境 - 数人云',
    keywords: '容器云，数人云，容器生产环境，Docker,',
    description: '数人云基于Mesos技术，实现了大规模企业级Docker生产环境，可迅速搭建企业级容器云。'
    + '帮助用户自动化、方便的使用Docker等容器技术。'
};

var sceneSeckill = {
    title: '高并发解决方案 应用弹性扩展解决方案 - 数人云',
    keywords: '高并发解决方案，弹性扩展，秒级扩容',
    description: '通过秒级扩容能力，将应用弹性做到极致，解决企业的高并发问题，满足企业业务快速增长需求。'
};

var sceneCompanyApp = {
    title: '一键部署企业级应用 - 数人云',
    keywords: '一键部署，PaaS 平台、PaaS、Mesos、Docker',
    description: '通过数人云可一键部署Docker容器化应用，Spark、Hadoop、Jenkins等分布式应用。'
    + '从而快速搭建微服务和大数据生产环境。'
};

var sceneCicd = {
    title: '持续集成 持续交付解决方案 加快产品迭代 - 数人云',
    keywords: '持续集成，持续交付，产品迭代，CI/CD，Jenkins',
    description: '数人云提供企业级的持续集成和持续交付方案，助力企业加快产品迭代速度，快速满足用户需求。'
};

var sceneBigData = {
    title: '大数据平台解决方案 - 数人云',
    keywords: '大数据，大数据平台，大数据解决方案，Spark，Hadoop',
    description: '数人云提供统一管理和调度的大数据平台解决方案，帮助企业快速搭建大数据应用环境，提高数据中心的资源利用率。'
    + '在降低大数据平台的实施、运维管理复杂度的同时，让大数据技术帮助企业实现业务的快速发展。'
};

var solutionO2O = {
    title: '电商秒杀、红包等高并发解决方案 - 数人云',
    keywords: '电商秒杀，红包促销，秒杀解决方案，红包IT解决方案',
    description: '使用数人云的秒级扩容能力，将应用弹性做到极致，解决高并发问题。'
    + '轻松实现电商、互联网金融等行业的秒杀，红包解决方案。'
};

var solutionInternet = {
    title: '互联网社交应用弹性扩展解决方案 - 数人云',
    keywords: '互联网社交解决方案，轻量级 PaaS 平台、PaaS、Mesos、Docker',
    description: '采用数人云互联网社交解决方案，可实现对底层资源的统一管理和动态调度，并将应用层和资源层解耦，'
    + '使整个系统实现了弹性伸缩。'
    + '解决互联网社交应用的突发访问量增长问题。'
};

var solutionTridition = {
    title: '能源企业混合云、PaaS平台、互联网业务解决方案 - 数人云',
    keywords: '能源行业解决方案，轻量级 PaaS 平台、PaaS、Mesos、Docker',
    description: '数人云作为专注于企业生产环境的PaaS产品，可以帮助企业快速搭建基于私有云和混合云环境。'
    + '首先数人云的提供了如下的功能，将应用运维80%的重复工作自动化和标准化，'
    + '帮助传统企业应对互联网业务带来的规模挑战。'
};

var solutionOperator = {
    title: '电信运营商轻量级PaaS平台解决方案',
    keywords: '电信运营商解决方案，轻量级 PaaS 平台, Mesos, Docker, PaaS',
    description: '数人云轻量级 paaS 平台，是基于 Apache Mesos 开源技术的商业化解决方案。'
    + '可快速搭建起极具弹性的轻量级 PaaS 平台。满足运营商日益增长的互联网应用需求。'
    + '此套技术框架路线已在浙江移动、Verizon 等运营商的生产系统得到了验证。'
};

var solutionFinance = {
    title: '金融行业数据搜集和大数据处理解决方案 - 数人云',
    keywords: '金融大数据解决方案，轻量级 PaaS 平台、PaaS、Mesos、Docker',
    description: '采用数人云金融行业大数据解决方案，可极大的提高集群资源利用率，并更方便的维护大数据处理平台。'
    + '让用户将注意力集中在大数据业务层，快速挖掘大数据所带来的商业价值。'
};

var solutionBioinfo = {
    title: '生物信息行业弹性扩展解决方案 - 数人云',
    keywords: '生物信息解决方案，轻量级 PaaS 平台、Mesos、Docker',
    description: '采用数人云生物信息行业解决方案，使得多任务在同一集群并行执行，'
    + '节省了大量的计算资源，帮助客户更加灵活地应对业务量的起伏。'
};

var sceneStresstesting = {
    title: '性能测试 - 百万并发级的压力测试解决方案',
    keywords: '百万并发级的压力测试解决方案，轻量级 PaaS 平台、Mesos、Docker',
    description: '数人云性能测试（Performance Testing）解决方案，能够提供百万并发用户级别的分布式压测能力，可模拟海量用户真实的业务场景。'
    + '廉价、高效、易用的压测解决方案。'
}


METADATA = {
    home: home,
    price: price,
    product: product,
    sceneContainerCloud: sceneContainerCloud,
    sceneSeckill: sceneSeckill,
    sceneCompanyApp: sceneCompanyApp,
    sceneCicd: sceneCicd,
    sceneBigData: sceneBigData,
    solutionO2O: solutionO2O,
    solutionInternet: solutionInternet,
    solutionTridition: solutionTridition,
    solutionOperator: solutionOperator,
    solutionFinance: solutionFinance,
    solutionBioinfo: solutionBioinfo,
    sceneStresstesting: sceneStresstesting
};
