export function handleEnvDefaults(additionalDefaults: object = {}) {
    handleEnv({
        DEBUG: false,
        WEBSITE_URL: "https://statio.cc",
        INSTANCE: "not-specified",
        APPLICATION: "unknown-statio-app",
        DISCORD_WEBHOOK_WEBLOGS: "https://discord.com/api/webhooks/123456789/abcdefghijklmnopqrstuvwxyz",
        ...additionalDefaults,
    });
}

function handleEnv(defaults: any) {
    const envKeys = Object.keys(defaults);
    envKeys.forEach((key) => {
        if (!process.env[key]) {
            process.env[key] = defaults[key];
        }
    });
}
