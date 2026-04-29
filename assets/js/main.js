// Entry point aplikasi.
(function () {
  // Ikon harus tetap dirender meski Element SDK tidak tersedia.
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  if (!window.elementSdk || typeof window.elementSdk.init !== 'function') {
    console.error('elementSdk belum tersedia.');
    if (typeof window.applyConfig === 'function' && window.defaultConfig) {
      window.applyConfig(window.defaultConfig);
    }
    return;
  }

  window.elementSdk.init({
    defaultConfig: window.defaultConfig,
    onConfigChange: async (config) => window.applyConfig(config),
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || window.defaultConfig.background_color,
          set: (v) => {
            config.background_color = v;
            window.elementSdk.setConfig({ background_color: v });
          }
        },
        {
          get: () => config.surface_color || window.defaultConfig.surface_color,
          set: (v) => {
            config.surface_color = v;
            window.elementSdk.setConfig({ surface_color: v });
          }
        },
        {
          get: () => config.text_color || window.defaultConfig.text_color,
          set: (v) => {
            config.text_color = v;
            window.elementSdk.setConfig({ text_color: v });
          }
        },
        {
          get: () => config.accent_color || window.defaultConfig.accent_color,
          set: (v) => {
            config.accent_color = v;
            window.elementSdk.setConfig({ accent_color: v });
          }
        },
        {
          get: () => config.success_color || window.defaultConfig.success_color,
          set: (v) => {
            config.success_color = v;
            window.elementSdk.setConfig({ success_color: v });
          }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || window.defaultConfig.font_family,
        set: (v) => {
          config.font_family = v;
          window.elementSdk.setConfig({ font_family: v });
        }
      },
      fontSizeable: {
        get: () => config.font_size || window.defaultConfig.font_size,
        set: (v) => {
          config.font_size = v;
          window.elementSdk.setConfig({ font_size: v });
        }
      }
    }),
    mapToEditPanelValues: (config) =>
      new Map([
        ['school_name', config.school_name || window.defaultConfig.school_name],
        ['academic_year', config.academic_year || window.defaultConfig.academic_year]
      ])
  });

  window.applyConfig(window.defaultConfig);
  if (typeof window.initDataSDK === 'function') {
    window.initDataSDK();
  }
})();

