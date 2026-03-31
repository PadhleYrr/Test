// ═══════════════════════════════════════════════════════════
//  MP GK PORTAL — CAPACITOR NATIVE BRIDGE
//  Haptics, Toast, Network, Status Bar integrations
// ═══════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ── HAPTIC FEEDBACK ──────────────────────────────────────
  const Haptics = {
    _available: false,

    init() {
      try {
        if (window.Capacitor && Capacitor.Plugins && Capacitor.Plugins.Haptics) {
          this._available = true;
        }
      } catch(e) {}
    },

    async light() {
      if (!this._available) return;
      try {
        await Capacitor.Plugins.Haptics.impact({ style: 'LIGHT' });
      } catch(e) {}
    },

    async medium() {
      if (!this._available) return;
      try {
        await Capacitor.Plugins.Haptics.impact({ style: 'MEDIUM' });
      } catch(e) {}
    },

    async heavy() {
      if (!this._available) return;
      try {
        await Capacitor.Plugins.Haptics.impact({ style: 'HEAVY' });
      } catch(e) {}
    },

    async success() {
      if (!this._available) return;
      try {
        await Capacitor.Plugins.Haptics.notification({ type: 'SUCCESS' });
      } catch(e) {}
    },

    async warning() {
      if (!this._available) return;
      try {
        await Capacitor.Plugins.Haptics.notification({ type: 'WARNING' });
      } catch(e) {}
    },

    async error() {
      if (!this._available) return;
      try {
        await Capacitor.Plugins.Haptics.notification({ type: 'ERROR' });
      } catch(e) {}
    },
  };

  // ── NATIVE TOAST ─────────────────────────────────────────
  const NativeToast = {
    _available: false,

    init() {
      try {
        if (window.Capacitor && Capacitor.Plugins && Capacitor.Plugins.Toast) {
          this._available = true;
        }
      } catch(e) {}
    },

    async show(message, duration = 'short') {
      if (!this._available) return false;
      try {
        await Capacitor.Plugins.Toast.show({
          text: message,
          duration: duration, // 'short' | 'long'
        });
        return true;
      } catch(e) {
        return false;
      }
    },
  };

  // ── NETWORK STATUS ───────────────────────────────────────
  const Network = {
    _online: true,
    _listeners: [],

    init() {
      if (window.Capacitor && Capacitor.Plugins && Capacitor.Plugins.Network) {
        Capacitor.Plugins.Network.getStatus().then(status => {
          this._online = status.connected;
          this._notify();
        }).catch(() => {});

        Capacitor.Plugins.Network.addListener('networkStatusChange', status => {
          const wasOnline = this._online;
          this._online = status.connected;
          if (this._online && !wasOnline) {
            _showOfflineBanner(false);
            showToastSafe('✅ Back online!', '#15803D');
          } else if (!this._online && wasOnline) {
            _showOfflineBanner(true);
            showToastSafe('📵 You\'re offline — cached content available', '#D97706');
          }
          this._notify();
        });
      } else {
        // Web fallback
        window.addEventListener('online', () => {
          this._online = true;
          _showOfflineBanner(false);
          showToastSafe('✅ Back online!', '#15803D');
        });
        window.addEventListener('offline', () => {
          this._online = false;
          _showOfflineBanner(true);
          showToastSafe('📵 You\'re offline — cached content available', '#D97706');
        });
        this._online = navigator.onLine;
      }
    },

    isOnline() { return this._online; },

    onChange(fn) { this._listeners.push(fn); },

    _notify() { this._listeners.forEach(fn => fn(this._online)); },
  };

  function _showOfflineBanner(show) {
    let banner = document.getElementById('offline-banner');
    if (show) {
      if (banner) return;
      banner = document.createElement('div');
      banner.id = 'offline-banner';
      banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99998;background:#D97706;color:#fff;text-align:center;padding:6px 16px;font-size:12px;font-weight:700;letter-spacing:.3px';
      banner.textContent = '📵 Offline Mode — Showing cached content';
      document.body.prepend(banner);
    } else {
      banner && banner.remove();
    }
  }

  // ── STATUS BAR ───────────────────────────────────────────
  const StatusBar = {
    init() {
      try {
        if (window.Capacitor && Capacitor.Plugins && Capacitor.Plugins.StatusBar) {
          Capacitor.Plugins.StatusBar.setStyle({ style: 'DARK' });
          Capacitor.Plugins.StatusBar.setBackgroundColor({ color: '#1A237E' });
        }
      } catch(e) {}
    },

    setColor(color) {
      try {
        if (window.Capacitor && Capacitor.Plugins && Capacitor.Plugins.StatusBar) {
          Capacitor.Plugins.StatusBar.setBackgroundColor({ color });
        }
      } catch(e) {}
    },
  };

  // ── SPLASH SCREEN ─────────────────────────────────────────
  const Splash = {
    hide() {
      try {
        if (window.Capacitor && Capacitor.Plugins && Capacitor.Plugins.SplashScreen) {
          Capacitor.Plugins.SplashScreen.hide({ fadeOutDuration: 300 });
        }
      } catch(e) {}
      // Also hide the web splash
      const webSplash = document.getElementById('app-splash');
      if (webSplash) {
        webSplash.style.opacity = '0';
        webSplash.style.transition = 'opacity 0.4s ease';
        setTimeout(() => webSplash.remove(), 500);
      }
    },
  };

  // ── ENHANCED showToast with native fallback ─────────────
  // Overrides the global showToast to use native Toast on device
  function _initNativeToastOverride() {
    const _originalShowToast = window.showToast;
    window.showToast = function(msg, color) {
      // Always show web toast (for color feedback)
      if (_originalShowToast) _originalShowToast(msg, color);
      // On native device, also show native toast for important messages
      if (NativeToast._available && !color) {
        NativeToast.show(msg, 'short');
      }
    };

    window.showToastSafe = function(msg, color) {
      if (typeof showToast === 'function') showToast(msg, color);
    };
  }

  // ── HAPTICS on interactive elements ──────────────────────
  function _initHapticListeners() {
    // Add haptic feedback to answer buttons, nav items, etc.
    document.addEventListener('click', function(e) {
      const target = e.target.closest('button, .nav-item, .opt, .mode-card, .chip, .tab');
      if (!target) return;

      if (target.classList.contains('opt')) {
        // Answer selection — medium haptic
        Haptics.medium();
      } else if (target.classList.contains('nav-item')) {
        // Navigation — light haptic
        Haptics.light();
      } else if (target.matches('.btn-primary, .btn-ghost')) {
        Haptics.light();
      } else if (target.classList.contains('mode-card')) {
        Haptics.light();
      }
    }, { passive: true });
  }

  // ── OFFLINE DATA CACHING ──────────────────────────────────
  const OfflineCache = {
    // Save user progress to localStorage for offline access
    saveProgress(data) {
      try {
        const cached = {
          timestamp: Date.now(),
          data: data,
        };
        localStorage.setItem('mpgk_offline_progress', JSON.stringify(cached));
      } catch(e) {}
    },

    getProgress() {
      try {
        const cached = JSON.parse(localStorage.getItem('mpgk_offline_progress') || 'null');
        return cached ? cached.data : null;
      } catch(e) { return null; }
    },

    // Cache last-seen notes content
    saveNoteContent(id, content) {
      try {
        const key = 'mpgk_note_' + id;
        localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), content }));
      } catch(e) {}
    },

    getNoteContent(id) {
      try {
        const item = JSON.parse(localStorage.getItem('mpgk_note_' + id) || 'null');
        return item ? item.content : null;
      } catch(e) { return null; }
    },
  };

  // ── INIT ─────────────────────────────────────────────────
  function init() {
    Haptics.init();
    NativeToast.init();
    StatusBar.init();
    Network.init();

    window.addEventListener('DOMContentLoaded', () => {
      _initNativeToastOverride();
      _initHapticListeners();

      // Register service worker
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(reg => {
          console.log('SW registered:', reg.scope);
        }).catch(err => {
          console.warn('SW registration failed:', err);
        });
      }

      // Hide splash after app loads
      setTimeout(() => Splash.hide(), 1200);

      // Show offline banner if already offline
      if (!Network.isOnline()) {
        _showOfflineBanner(true);
      }
    });
  }

  // Expose to global scope
  window.MPNative = { Haptics, NativeToast, Network, StatusBar, Splash, OfflineCache };

  // Auto-init
  init();

})();
