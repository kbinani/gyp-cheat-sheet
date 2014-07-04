$(document).ready(function() {
  var gypcs = {}

  gypcs.language = 'ja';

  gypcs.descriptions = {
    general_type: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    # @1\n" +
        "    'type':  'executable',\n" +
        "\n" +
        "    # @2\n" +
        "    'type': 'loadable_module',\n" +
        "\n" +
        "    # @3\n" +
        "    'type': 'shared_library',\n" +
        "\n" +
        "    # @4\n" +
        "    'type': 'static_library',\n" +
        "\n" +
        "    # @5\n" +
        "    'type': 'none',\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "アプリケーション (.exe)", en: "Application (.exe)" },
        "@2": { ja: "ダイナミック ライブラリ (.dll)", en: "Dynamic Library (.dll)" },
        "@3": { ja: "ダイナミック ライブラリ (.dll)", en: "Dynamic Library (.dll)" },
        "@4": { ja: "スタティック ライブラリ (.lib)", en: "Static library (.lib)" },
        "@5": { ja: "ユーティリティ", en: "Utility" },
      },
    },
    general_characterset: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_configuration_attributes': {\n" +
        "      # @1\n" +
        "      'CharacterSet': '1',\n" +
        "\n" +
        "      # @2\n" +
        "      'CharacterSet': '2',\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "Unicode 文字セットを使用する", en: "Use Unicode Character Set" },
        "@2": { ja: "マルチ バイト文字セットを使用する", en: "Use Multi-Byte Character Set" },
      },
    },
    general_toolset: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    # Visual Studio 2008 (v90)\n" +
        "    'msbuild_toolset': 'v90',\n" +
        "\n" +
        "    # Visual Studio 2010 (v100)\n" +
        "    'msbuild_toolset': 'v100',\n" +
        "\n" +
        "    # Visual Studio 2012 - Windows XP\n" +
        "    'msbuild_toolset': 'v110_xp',\n" +
        "\n" +
        "    # Visual Studio 2012\n" +
        "    'msbuild_toolset': 'v110',\n" +
        "  }\n" +
        "]\n",
      ],
    },
    general_targetname: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'product_name': 'MyProduct'\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_general_includedir: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'include_dirs': [\n" +
        "      'C:SomeLibraryinclude'\n" +
        "    ]\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_general_additionalusingdirectories: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'AdditionalUsingDirectories': [\n" +
        "            'folderA',\n" +
        "            'folderB'\n" +
        "        ]\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_general_debuginformationformat: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1 (/Z7)\n" +
        "        'DebugInformationFormat': '1'\n" +
        "\n" +
        "        # @2 (/Zi)\n" +
        "        'DebugInformationFormat': '3'\n" +
        "\n" +
        "        # @3 (/ZI)\n" +
        "        'DebugInformationFormat': '4'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "C7 互換", en: "C7 compatible" },
        "@2": { ja: "プログラム データベース", en: "Program Database" },
        "@3": { ja: "エディット コンティニュのプログラム データベース", en: "Program Database for Edit And Continue" },
      },
    },
    vccompilertools_general_suppressstartupbanner: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/nologo)\n" +
        "        'SuppressStartupBanner': 'true',\n" +
        "\n" +
        "        # @no (/nologo-)\n" +
        "        'SuppressStartupBanner': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_general_warninglevel: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1 (/W0)\n" +
        "        'WarningLevel': '0',\n" +
        "\n" +
        "        # @2 (/W1)\n" +
        "        'WarningLevel': '1',\n" +
        "\n" +
        "        # @3 (/W2)\n" +
        "        'WarningLevel': '2',\n" +
        "\n" +
        "        # @4 (/W3)\n" +
        "        'WarningLevel': '3',\n" +
        "\n" +
        "        # @5 (/W4)\n" +
        "        'WarningLevel': '4',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "すべての警告を非表示にする", en: "Turn Off All Warnings" },
        "@2": { ja: "レベル 1", en: "Level1" },
        "@3": { ja: "レベル 2", en: "Level2" },
        "@4": { ja: "レベル 3", en: "Level3" },
        "@5": { ja: "レベル 4", en: "Level4" },
      },
    },
    vccompilertools_general_warnaserror: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/WX)\n" +
        "        'WarnAsError': 'true',\n" +
        "\n" +
        "        # @no (/WX-)\n" +
        "        'WarnAsError': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_optimization_optimization: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1 (/Od)\n" +
        "        'Optimization': '0'\n" +
        "\n" +
        "        # @2 (/O1)\n" +
        "        'Optimization': '1'\n" +
        "\n" +
        "        # @3 (/O2)\n" +
        "        'Optimization': '2'\n" +
        "\n" +
        "        # @4 (/Ox)\n" +
        "        'Optimization': '3'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "無効", en: "Disabled" },
        "@2": { ja: "サイズの最小化", en: "Minimize Size" },
        "@3": { ja: "実行速度の最小化", en: "Maximize Speed" },
        "@4": { ja: "最大限の最適化", en: "Full Optimization" },
      },
    },
    vccompilertools_optimization_inlinefunctionexpansion: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1\n" +
        "        'InlineFunctionExpansion': '0'\n" +
        "\n" +
        "        # @2 (/Ob1)\n" +
        "        'InlineFunctionExpansion': '1'\n" +
        "\n" +
        "        # @3 (/Ob2)\n" +
        "        'InlineFunctionExpansion': '2'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "既定", en: "Default" },
        "@2": { ja: "__inline のみ", en: "Only __inline" },
        "@3": { ja: "拡張可能な関数すべて", en: "Any Suitable" },
      },
    },
    vccompilertools_optimization_enableintrinsicfunctions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/Oi)\n" +
        "        'EnableIntrinsicFunctions': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'EnableIntrinsicFunctions': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_optimization_favorsizeorspeed: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1\n" +
        "        'FavorSizeOrSpeed': '0',\n" +
        "\n" +
        "        # @2 (/Ot)\n" +
        "        'FavorSizeOrSpeed': '1',\n" +
        "\n" +
        "        # @3 (/Os)\n" +
        "        'FavorSizeOrSpeed': '2',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "なし", en: "Neither" },
        "@2": { ja: "実行速度を優先", en: "Favor fast code" },
        "@3": { ja: "実行可能ファイルのサイズを優先", en: "Favor small code" },
      },
    },
    vccompilertools_optimization_omitframepointers: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/Oy)\n" +
        "        'OmitFramePointers': 'true'\n" +
        "\n" +
        "        # @no (/Oy-)\n" +
        "        'OmitFramePointers': 'false'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_optimization_enablefibersafeoptimizations: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/GT)\n" +
        "        'EnableFiberSafeOptimizations': 'true'\n" +
        "\n" +
        "        # @no\n" +
        "        'EnableFiberSafeOptimizations': 'false'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_optimization_wholeprogramoptimization: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/GL)\n" +
        "        'WholeProgramOptimization': 'true'\n" +
        "\n" +
        "        # @no\n" +
        "        'WholeProgramOptimization': 'false'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_preprocessor_defines: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'defines': [\n" +
        "        'FOO',\n" +
        "        'BAR'\n" +
        "    ],\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_preprocessor_ignorestandardincludepath: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/X)\n" +
        "        'IgnoreStandardIncludePath': 'true'\n" +
        "\n" +
        "        # @no\n" +
        "        'IgnoreStandardIncludePath': 'false'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_preprocessor_undefineallpreprocessordefinitions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/u)\n" +
        "        'UndefineAllPreprocessorDefinitions': 'true'\n" +
        "\n" +
        "        # @no\n" +
        "        'UndefineAllPreprocessorDefinitions': 'false'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_preprocessor_generatepreprocessedfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1: @no\n" +
        "        # @2: @no\n" +
        "        'GeneratePreprocessedFile': '0',\n" +
        "\n" +
        "        # @1: @yes (/P)\n" +
        "        # @2: @no\n" +
        "        'GeneratePreprocessedFile': '1',\n" +
        "\n" +
        "        # @1: @yes (/P)\n" +
        "        # @2: @yes (/EP)\n" +
        "        'GeneratePreprocessedFile': '2',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "ファイルの前処理", en: "Preprocess to a File" },
        "@2": { ja: "行番号の前処理の抑制", en: "Preprocess Suppress Line Numbers" },
      },
    },
    vccompilertools_preprocessor_undefinepreprocessordefinitions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'UndefinePreprocessorDefinitions': [\n" +
        "            'FOO',\n" +
        "            'BAR'\n" +
        "        ]\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_preprocessor_keepcomments: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/C)\n" +
        "        'KeepComments': 'true'\n" +
        "\n" +
        "        # @no\n" +
        "        'KeepComments': 'false'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_codegeneration_stringpooling: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/GF)\n" +
        "        'StringPooling': 'true'\n" +
        "\n" +
        "        # @no (/GF-)\n" +
        "        'StringPooling': 'false'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_codegeneration_minimalrebuild: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/Gm)\n" +
        "        'MinimalRebuild': 'true'\n" +
        "\n" +
        "        # @no (/Gm-)\n" +
        "        'MinimalRebuild': 'false'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_codegeneration_exceptionhandling: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @no\n" +
        "        'ExceptionHandling': '0'\n" +
        "\n" +
        "        # @yes (/EHsc)\n" +
        "        'ExceptionHandling': '1'\n" +
        "\n" +
        "        # @1 (/EHa)\n" +
        "        'ExceptionHandling': '2'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "はい - SEH の例外あり", en: "Yes with SEH Exceptions" },
      },
    },
    vccompilertools_codegeneration_smallertypecheck: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/RTCc)\n" +
        "        'SmallerTypeCheck': 'true'\n" +
        "\n" +
        "        # @no\n" +
        "        'SmallerTypeCheck': 'false'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_codegeneration_basicruntimechecks: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1\n" +
        "        'BasicRuntimeChecks': '0'\n" +
        "\n" +
        "        # @2 (/RTCs)\n" +
        "        'BasicRuntimeChecks': '1'\n" +
        "\n" +
        "        # @3 (/RTCu)\n" +
        "        'BasicRuntimeChecks': '2'\n" +
        "\n" +
        "        # @4 (/RTC1)\n" +
        "        'BasicRuntimeChecks': '3'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "既定", en: "Default" },
        "@2": { ja: "スタック フレーム", en: "Stack Frames (/RTCs)" },
        "@3": { ja: "初期化されていない変数", en: "Uninitialized variables (/RTCu)" },
        "@4": { ja: "両方 (/RTC1、/RTCsu と同等)", en: "Both (/RTC1, equiv. to /RTCsu) (/RTC1)" },
      },
    },
    vccompilertools_codegeneration_runtimelibrary: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'configurations': {\n" +
        "      'Debug': {\n" +
        "        'msvs_settings': {\n" +
        "          'VCCLCompilerTool': {\n" +
        "            # @1 (/MT)\n" +
        "            'RuntimeLibrary': '0',\n" +
        "\n" +
        "            # @2 (/MTd)\n" +
        "            'RuntimeLibrary': '1',\n" +
        "\n" +
        "            # @3 (/MD)\n" +
        "            'RuntimeLibrary': '2',\n" +
        "\n" +
        "            # @4 (/MDd)\n" +
        "            'RuntimeLibrary': '3',\n" +
        "          }\n" +
        "        }\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "マルチスレッド", en: "Multi-threaded (/MT)" },
        "@2": { ja: "マルチスレッド デバッグ", en: "Multi-threaded Debug (/MTd)" },
        "@3": { ja: "マルチスレッド DLL", en: "Multi-threaded DLL (/MD)" },
        "@4": { ja: "マルチスレッド デバッグ DLL", en: "Multi-threaded Debug DLL (/MDd)" },
      },
    },
    vccompilertools_codegeneration_structmemberalignment: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1\n" +
        "        'StructMemberAlignment': '0',\n" +
        "\n" +
        "        # 1 @2 (/Zp1)\n" +
        "        'StructMemberAlignment': '1',\n" +
        "\n" +
        "        # 2 @3 (/Zp2)\n" +
        "        'StructMemberAlignment': '2',\n" +
        "\n" +
        "        # 4 @3 (/Zp4)\n" +
        "        'StructMemberAlignment': '3',\n" +
        "\n" +
        "        # 8 @3 (/Zp8)\n" +
        "        'StructMemberAlignment': '4',\n" +
        "\n" +
        "        # 16 @3 (/Zp16)\n" +
        "        'StructMemberAlignment': '5',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "既定", en: "Default" },
        "@2": { ja: "バイト", en: "Byte" },
        "@3": { ja: "バイト", en: "Bytes" },
      },
    },
    vccompilertools_codegeneration_buffersecuritycheck: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/GS)\n" +
        "        'BufferSecurityCheck': 'true',\n" +
        "\n" +
        "        # @no (/GS-)\n" +
        "        'BufferSecurityCheck': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_codegeneration_enablefunctionlevellinking: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/Gy)\n" +
        "        'EnableFunctionLevelLinking': 'true',\n" +
        "\n" +
        "        # @no (/Gy-)\n" +
        "        'EnableFunctionLevelLinking': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_codegeneration_enableenhancedinstructionset: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1\n" +
        "        'EnableEnhancedInstructionSet': '0',\n" +
        "\n" +
        "        # @2 (/arch:SSE)\n" +
        "        'EnableEnhancedInstructionSet': '1',\n" +
        "\n" +
        "        # @3 (/arch:SSE2)\n" +
        "        'EnableEnhancedInstructionSet': '2',\n" +
        "\n" +
        "        # @4 (/arch:AVX)\n" +
        "        'EnableEnhancedInstructionSet': '3',\n" +
        "\n" +
        "        # @5 (/arch:IA32)\n" +
        "        'EnableEnhancedInstructionSet': '4',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "設定なし", en: "Not Set" },
        "@2": { ja: "ストリーミング SIMD 拡張機能", en: "Streaming SIMD Extensions (/arch:SSE)" },
        "@3": { ja: "ストリーミング SIMD 拡張機能 2", en: "Streaming SIMD Extensions 2 (/arch:SSE2)" },
        "@4": { ja: "Advanced Vector Extensions", en: "Advanced Vector Extensions (/arch:AVX)" },
        "@5": { ja: "拡張命令なし", en: "No Enhanced Instructions (/arch:IA32)" },
      },
    },
    vccompilertools_codegeneration_floatingpointmodel: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # Precise (/fp:precise)\n" +
        "        'FloatingPointModel': '0',\n" +
        "\n" +
        "        # Strict (/fp:strict)\n" +
        "        'FloatingPointModel': '1',\n" +
        "\n" +
        "        # Fast (/fp:fast)\n" +
        "        'FloatingPointModel': '2',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_codegeneration_floatingpointexceptions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/fp:except)\n" +
        "        'FloatingPointExceptions': 'true',\n" +
        "\n" +
        "        # @no (/fp:except-)\n" +
        "        'FloatingPointExceptions': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_language_disablelanguageextensions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/Za)\n" +
        "        'DisableLanguageExtensions': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'DisableLanguageExtensions': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_language_treatwchartasbuiltintype: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/Zc:wchar_t)\n" +
        "        'TreatWChar_tAsBuiltInType': 'true',\n" +
        "\n" +
        "        # @no (/Zc:wchar_t-)\n" +
        "        'TreatWChar_tAsBuiltInType': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_language_forceconformanceinforloopscope: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/Zc:forScope)\n" +
        "        'ForceConformanceInForLoopScope': 'true',\n" +
        "\n" +
        "        # @no (/Zc:forScope-)\n" +
        "        'ForceConformanceInForLoopScope': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_language_runtimetypeinfo: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/GR)\n" +
        "        'RuntimeTypeInfo': 'true',\n" +
        "\n" +
        "        # @no (/GR-)\n" +
        "        'RuntimeTypeInfo': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_language_openmp: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/openmp)\n" +
        "        'OpenMP': 'true',\n" +
        "\n" +
        "        # @no (/openmp-)\n" +
        "        'OpenMP': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_precompiledheader_useprecompiledheader: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1\n" +
        "        'UsePrecompiledHeader': '0',\n" +
        "\n" +
        "        # @2 (/Yc)\n" +
        "        'UsePrecompiledHeader': '1',\n" +
        "\n" +
        "        # @3 (/Yu)\n" +
        "        'UsePrecompiledHeader': '2',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
        "'targets': [\n" +
        "  {\n" +
        "    # @4\n" +
        "    'msvs_precompiled_source': 'stdafx.cpp',\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "プリコンパイル済みヘッダーを使用しない", en: "Not Using Precompiled Headers" },
        "@2": { ja: "作成", en: "Create" },
        "@3": { ja: "使用", en: "Use" },
        "@4": { ja: "stdafx.cpp について、'作成 (/Yc)'", en: "'Create (/Yc)' for stdafx.cpp" },
      },
    },
    vccompilertools_precompiledheader_precompiledheaderthrough: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'PrecompiledHeaderThrough': 'stdafx.h',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_precompiledheader_precompiledheaderfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'PrecompiledHeaderFile': '$(IntDir)$(TargetName).pch',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_output_expandattributedsource: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/Fx)\n" +
        "        'ExpandAttributedSource': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'ExpandAttributedSource': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_output_assembleroutput: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1\n" +
        "        'AssemblerOutput': '0',\n" +
        "\n" +
        "        # @2 (/FA)\n" +
        "        'AssemblerOutput': '1',\n" +
        "\n" +
        "        # @3 (/FAcs)\n" +
        "        'AssemblerOutput': '2',\n" +
        "\n" +
        "        # @4 (/FAc)\n" +
        "        'AssemblerOutput': '3',\n" +
        "\n" +
        "        # @5 (/FAs)\n" +
        "        'AssemblerOutput': '4',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "なし", en: "No Listing" },
        "@2": { ja: "アセンブリ コードのみ", en: "Assembly-Only Listing" },
        "@3": { ja: "アセンブリ コード、コンピューター語コード、ソース コード", en: "Assembly, Machine Code and Source" },
        "@4": { ja: "アセンブリ コードとコンピューター語コード", en: "Assembly With Machine Code" },
        "@5": { ja: "アセンブリ コードとソース コード", en: "Assembly With Source Code" },
      },
    },
    vccompilertools_output_assemblerlistinglocation: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'AssemblerListingLocation': '$(IntDir)',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_output_objectfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'ObjectFile': '$(IntDir)',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_output_programdatabasefilename: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'ProgramDataBaseFileName': '$(IntDir)vc$(PlatformToolsetVersion).pdb',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_output_generatexmldocumentationfiles: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/doc)\n" +
        "        'GenerateXMLDocumentationFiles': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'GenerateXMLDocumentationFiles': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_output_xmldocumentationfilename: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'XMLDocumentationFileName': '$(IntDir)',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_browserinformation_browseinformation: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @no\n" +
        "        'BrowseInformation': '0',\n" +
        "\n" +
        "        # @yes (/FR)\n" +
        "        'BrowseInformation': '1',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_browserinformation_browseinformationfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'BrowseInformationFile': '$(IntDir)',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_details_disablespecificwarnings: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'DisableSpecificWarnings': [\n" +
        "          '4996', // warning C4996\n" +
        "        ],\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_details_callingconversion: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # __cdecl (/Gd)\n" +
        "        'CallingConvention': '0'\n" +
        "\n" +
        "        # __fastcall (/Gr)\n" +
        "        'CallingConvention': '1'\n" +
        "\n" +
        "        # __stdcall (/Gz)\n" +
        "        'CallingConvention': '2'\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_details_compileas: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1\n" +
        "        'CompileAs': '0',\n" +
        "\n" +
        "        # @2 (/TC)\n" +
        "        'CompileAs': '1',\n" +
        "\n" +
        "        # @3 (/TP)\n" +
        "        'CompileAs': '2',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "既定", en: "Default" },
        "@2": { ja: "C コードとしてコンパイル", en: "Compile as C Code" },
        "@3": { ja: "C++ コードとしてコンパイル", en: "Compile as C++ Code" },
      },
    },
    vccompilertools_details_forcedincludefiles: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'ForcedIncludeFiles': [\n" +
        "          'stdafx.h',\n" +
        "        ],\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_details_forcedusingfiles: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        'ForcedUsingFiles': [\n" +
        "          'fileA',\n" +
        "          'fileB',\n" +
        "        ],\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_details_showincludes: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/showIncludes)\n" +
        "        'ShowIncludes': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'ShowIncludes': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_details_usefullpaths: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/FC)\n" +
        "        'UseFullPaths': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'UseFullPaths': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_details_omitdefaultlibname: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @yes (/Zl)\n" +
        "        'OmitDefaultLibName': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'OmitDefaultLibName': 'false',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vccompilertools_details_errorreporting: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCCLCompilerTool': {\n" +
        "        # @1 (/errorReport:none)\n" +
        "        'ErrorReporting': '0',\n" +
        "\n" +
        "        # @2 (/errorReport:prompt)\n" +
        "        'ErrorReporting': '1',\n" +
        "\n" +
        "        # @3 (/errorReport:queue)\n" +
        "        'ErrorReporting': '2',\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "レポートを送信しない", en: "Do Not Send Report" },
        "@2": { ja: "すぐにメッセージを表示", en: "Prompt Immediately" },
        "@3": { ja: "次回ログインのためのキュー", en: "Queue For Next Login" },
      },
    },
    vclinkertools_general_outputfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'OutputFile': '$(OutDir)$(TargetName)$(TargetExt)',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_general_showprogress: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @1\n" +
        "        'ShowProgress': '0',\n" +
        "\n" +
        "        # @2 (/VERBOSE)\n" +
        "        'ShowProgress': '1',\n" +
        "\n" +
        "        # @3 (/VERBOSE:Lib)\n" +
        "        'ShowProgress': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "設定なし", en: "Not Set" },
        "@2": { ja: "詳細情報をすべて表示", en: "Display all progress messages" },
        "@3": { ja: "検索したライブラリ", en: "For Libraries Searched" },
      },
    },
    vclinkertools_general_version: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'Version': '3.14159',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_general_linkincremental: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @no (/INCREMENTAL:NO)\n" +
        "        'LinkIncremental': '1',\n" +
        "\n" +
        "        # @yes (/INCREMENTAL)\n" +
        "        'LinkIncremental': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_general_suppressstartupbanner: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/NOLOGO)\n" +
        "        'SuppressStartupBanner': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'SuppressStartupBanner': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_general_ignoreimportlibrary: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes\n" +
        "        'IgnoreImportLibrary': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'IgnoreImportLibrary': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_general_registeroutput: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes\n" +
        "        'RegisterOutput': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'RegisterOutput': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_general_peruserredirection: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes\n" +
        "        'PerUserRedirection': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'PerUserRedirection': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_general_additionallibrarydirectories: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'AdditionalLibraryDirectories': [\n" +
        "          'C:SomeLibrarylib',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_general_linklibrarydependencies: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes\n" +
        "        'LinkLibraryDependencies': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'LinkLibraryDependencies': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_general_uselibrarydependencyinputs: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes\n" +
        "        'UseLibraryDependencyInputs': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'UseLibraryDependencyInputs': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_input_additionaldependencies: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'AdditionalDependencies': [\n" +
        "          'file1',\n" +
        "          'file2',\n" +
        "        ]\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_input_ignorealldefaultlibraries: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/NODEFAULTLIB)\n" +
        "        'IgnoreAllDefaultLibraries': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'IgnoreAllDefaultLibraries': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_input_ignoredefaultlibrarynames: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'IgnoreDefaultLibraryNames': [\n" +
        "          'file1',\n" +
        "          'file2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_input_moduledefinitionfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'ModuleDefinitionFile': 'a_file_name.def',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_input_addmodulenamestoassembly: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'AddModuleNamesToAssembly': [\n" +
        "          'file1',\n" +
        "          'file2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_input_embedmanagedresourcefile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'EmbedManagedResourceFile': [\n" +
        "          'file1',\n" +
        "          'file2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_input_forcesymbolreferences: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'ForceSymbolReferences': [\n" +
        "          'file1',\n" +
        "          'file2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_input_delayloaddlls: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'DelayLoadDLLs': [\n" +
        "          'file1',\n" +
        "          'file2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_input_assemblylinkresource: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'AssemblyLinkResource': [\n" +
        "          'file1',\n" +
        "          'file2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_manifestfile_generatemanifest: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/MANIFEST)\n" +
        "        'GenerateManifest': 'true',\n" +
        "\n" +
        "        # @no (/MANIFEST:NO)\n" +
        "        'GenerateManifest': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_manifestfile_manifestfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'ManifestFile': '$(IntDir)$(TargetName)$(TargetExt).intermediate.manifest',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_manifestfile_additionalmanifestdependencies: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'AdditionalManifestDependencies': [\n" +
        "          'file1',\n" +
        "          'file2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_manifestfile_allowisolation: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes\n" +
        "        'AllowIsolation': 'true',\n" +
        "\n" +
        "        # @no (/ALLOWISOLATION:NO)\n" +
        "        'AllowIsolation': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_manifestfile_enableuac: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/MANIFESTUAC:)\n" +
        "        'EnableUAC': 'true',\n" +
        "\n" +
        "        # @no (/MANIFESTUAC:NO)\n" +
        "        'EnableUAC': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_manifestfile_uacexecutionlevel: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # asInvoker (/level='asInvoker')\n" +
        "        'UACExecutionLevel': '0',\n" +
        "\n" +
        "        # highestAvailable (/level='highestAvailable')\n" +
        "        'UACExecutionLevel': '1',\n" +
        "\n" +
        "        # requireAdministrator (/level='requireAdministrator')\n" +
        "        'UACExecutionLevel': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_manifestfile_uacuiaccess: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/uiAccess='true')\n" +
        "        'UACUIAccess': 'true',\n" +
        "\n" +
        "        # @no (/uiAccess='false')\n" +
        "        'UACUIAccess': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_debug_generatedebuginformation: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'configurations': {\n" +
        "      'Debug': {\n" +
        "        'msvs_settings': {\n" +
        "          'VCLinkerTool': {\n" +
        "            # @yes (/DEBUG)\n" +
        "            'GenerateDebugInformation': 'true',\n" +
        "\n" +
        "            # @no\n" +
        "            'GenerateDebugInformation': 'false',\n" +
        "          },\n" +
        "        }\n" +
        "      }\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_debug_programdatabasefile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'ProgramDatabaseFile': '$(OutDir)$(TargetName).pdb',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_debug_stripprivatesymbols: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "       'StripPrivateSymbols': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_debug_generatemapfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/MAP)\n" +
        "        'GenerateMapFile': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'GenerateMapFile': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_debug_mapfilename: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'MapFileName': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_debug_mapexports: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/MAPINFO:EXPORTS)\n" +
        "        'MapExports': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'MapExports': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_debug_assemblydebug: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/ASSEMBLYDEBUG)\n" +
        "        'AssemblyDebug': '1',\n" +
        "\n" +
        "        # @no (/ASSEMBLYDEBUG:DISABLE)\n" +
        "        'AssemblyDebug': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_system_generatedebuginformation: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @1\n" +
        "        'SubSystem': '0',\n" +
        "\n" +
        "        # @2 (/SUBSYSTEM:CONSOLE)\n" +
        "        'SubSystem': '1',\n" +
        "\n" +
        "        # @3 (/SUBSYSTEM:WINDOWS)\n" +
        "        'SubSystem': '2',\n" +
        "\n" +
        "        # @4 (/SUBSYSTEM:NATIVE)\n" +
        "        'SubSystem': '3',\n" +
        "\n" +
        "        # @5 (/SUBSYSTEM:EFI_APPLICATION)\n" +
        "        'SubSystem': '4',\n" +
        "\n" +
        "        # @6 (/SUBSYSTEM:EFI_BOOT_SERVICE_DRIVER)\n" +
        "        'SubSystem': '5',\n" +
        "\n" +
        "        # @7 (/SUBSYSTEM:EFI_ROM)\n" +
        "        'SubSystem': '6',\n" +
        "\n" +
        "        # @8 (/SUBSYSTEM:EFI_RUNTIME_DRIVER)\n" +
        "        'SubSystem': '7',\n" +
        "\n" +
        "        # WindowsCE\n" +
        "        'SubSystem': '8',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "設定なし", en: "Not Set" },
        "@2": { ja: "コンソール", en: "Console" },
        "@3": { ja: "Windows", en: "Windows" },
        "@4": { ja: "ネイティブ", en: "Native" },
        "@5": { ja: "EFI アプリケーション", en: "EFI Application" },
        "@6": { ja: "EFI ブート サービス ドライバー", en: "EFI Boot Service Driver" },
        "@7": { ja: "EFI ROM", en: "EFI ROM" },
        "@8": { ja: "EFI ランタイム", en: "EFI Runtime" },
      },
    },
    vclinkertools_system_heapreservesize: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'HeapReserveSize': '1048576', # size in bytes\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_system_heapcommitsize: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'HeapCommitSize': '4096', # size in bytes\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_system_stackreservesize: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'StackReserveSize': '1048576',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_system_stackcommitsize: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'StackCommitSize': '4096',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_system_largeaddressaware: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @no (/LARGEADDRESSAWARE:NO)\n" +
        "        'LargeAddressAware': '1',\n" +
        "\n" +
        "        # @yes (/LARGEADDRESSAWARE)\n" +
        "        'LargeAddressAware': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_system_terminalserveraware: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @no (/TSAWARE:NO)\n" +
        "        'TerminalServerAware': '1',\n" +
        "\n" +
        "        # @yes (/TSAWARE)\n" +
        "        'TerminalServerAware': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_system_swaprunfromcd: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/SWAPRUN:CD)\n" +
        "        'SwapRunFromCD': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'SwapRunFromCD': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_system_swaprunfromnet: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/SWAPRUN:NET)\n" +
        "        'SwapRunFromNet': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'SwapRunFromNet': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_system_driver: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @1\n" +
        "        'Driver': '0',\n" +
        "\n" +
        "        # @2 (/Driver)\n" +
        "        'Driver': '1',\n" +
        "\n" +
        "        # @3 (/DRIVER:UPONLY)\n" +
        "        'Driver': '2',\n" +
        "\n" +
        "        # @4 (/DRIVER:WDM)\n" +
        "        'Driver': '3',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "設定なし", en: "Not Set" },
        "@2": { ja: "ドライバー", en: "Driver" },
        "@3": { ja: "UP のみ", en: "UP Only" },
        "@4": { ja: "WDM", en: "WDM" },
      },
    },
    vclinkertools_optimization_optimizereferences: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @no (/OPT:NOREF)\n" +
        "        'OptimizeReferences': '1',\n" +
        "\n" +
        "        # @yes (/OPT:REF)\n" +
        "        'OptimizeReferences': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_optimization_enablecomdatfolding: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @no (/OPT:NOICF)\n" +
        "        'EnableCOMDATFolding': '1',\n" +
        "\n" +
        "        # @yes (/OPT:ICF)\n" +
        "        'EnableCOMDATFolding': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_optimization_functionorder: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'FunctionOrder': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_optimization_profileguideddatabase: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'ProfileGuidedDatabase': '$(OutDir)$(TargetName).pgd',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_optimization_linktimecodegeneration: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @1\n" +
        "        'LinkTimeCodeGeneration': '0',\n" +
        "\n" +
        "        # @2 (/LTCG)\n" +
        "        'LinkTimeCodeGeneration': '1',\n" +
        "\n" +
        "        # @3 (/LTCG:PGInstrument)\n" +
        "        'LinkTimeCodeGeneration': '2',\n" +
        "\n" +
        "        # @4 (/LTCG:PGOptimize)\n" +
        "        'LinkTimeCodeGeneration': '3',\n" +
        "\n" +
        "        # @5 (/LTCG:PGUpdate)\n" +
        "        'LinkTimeCodeGeneration': '4',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "既定", en: "Default" },
        "@2": { ja: "リンク時のコード生成を使用", en: "Use Link Time Code Generation" },
        "@3": { ja: "ガイド付き最適化のプロファイル - インストルメント", en: "Profile Guided Optimization - Instrument" },
        "@4": { ja: "ガイド付き最適化のプロファイル - 最適化", en: "Profile Guided Optimization - Optimization" },
        "@5": { ja: "ガイド付き最適化のプロファイル - 更新ガイド付き最適化のプロファイル - 更新", en: "Profile Guided Optimization - Update" },
      },
    },
    vclinkertools_embeddedidl_midlcommandfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'MidlCommandFile': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_embeddedidl_ignoreembeddedidl: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/IGNOREIDL)\n" +
        "        'IgnoreEmbeddedIDL': 'true',\n" +
        "        # @no\n" +
        "        'IgnoreEmbeddedIDL': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_embeddedidl_mergedidlbasefilename: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'MergedIDLBaseFileName': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_embeddedidl_typelibraryfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'TypeLibraryFile': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_embeddedidl_typelibraryresourceid: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'TypeLibraryResourceID': '1',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_entrypointsymbol: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'EntryPointSymbol': 'entry_point_symbol',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_setchecksum: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/RELEASE)\n" +
        "        'SetChecksum': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'SetChecksum': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_baseaddress: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'BaseAddress': '0x400000',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_randomizedbaseaddress: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @no (/DYNAMICBASE:NO)\n" +
        "        'RandomizedBaseAddress': '1',\n" +
        "\n" +
        "        # @yes (/DYNAMICBASE)\n" +
        "        'RandomizedBaseAddress': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_fixedbaseaddress: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @no (/FIXED:NO)\n" +
        "        'FixedBaseAddress': '1',\n" +
        "\n" +
        "        # @yes (/FIXED)\n" +
        "        'FixedBaseAddress': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_dataexecutionprevention: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @no (/NXCOMPAT:NO)\n" +
        "        'DataExecutionPrevention': '1',\n" +
        "\n" +
        "        # @yes (/NXCOMPAT)\n" +
        "        'DataExecutionPrevention': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_turnoffassemblygeneration: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/NOASSEMBLY)\n" +
        "        'TurnOffAssemblyGeneration': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'TurnOffAssemblyGeneration': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_supportunloadofdelayloadeddll: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/DELAY:UNLOAD)\n" +
        "        'SupportUnloadOfDelayLoadedDLL': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'SupportUnloadOfDelayLoadedDLL': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_importlibrary: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'ImportLibrary': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_mergesections: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'MergeSections': '.rdata=.text',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_targetmachine: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @1\n" +
        "        'TargetMachine': '0',\n" +
        "\n" +
        "        # MachineX86 (/MACHINE:X86)\n" +
        "        'TargetMachine': '1',\n" +
        "\n" +
        "        # MachineARM (/MACHINE:ARM)\n" +
        "        'TargetMachine': '3',\n" +
        "\n" +
        "        # MachineEBC (/MACHINE:EBC)\n" +
        "        'TargetMachine': '4',\n" +
        "\n" +
        "        # MachineIA64 (/MACHINE:IA64)\n" +
        "        'TargetMachine': '5',\n" +
        "\n" +
        "        # MachineMIPS (/MACHINE:MIPS)\n" +
        "        'TargetMachine': '7',\n" +
        "\n" +
        "        # MachineMIPS16 (/MACHINE:MIPS16)\n" +
        "        'TargetMachine': '8',\n" +
        "\n" +
        "        # MachineMIPSFPU (/MACHINE:MIPSFPU)\n" +
        "        'TargetMachine': '9',\n" +
        "\n" +
        "        # MachineMIPSFPU16 (/MACHINE:MIPSFPU16)\n" +
        "        'TargetMachine': '10',\n" +
        "\n" +
        "        # MachineSH4 (/MACHINE:SH4)\n" +
        "        'TargetMachine': '14',\n" +
        "\n" +
        "        # MachineTHUMB (/MACHINE:THUMB)\n" +
        "        'TargetMachine': '16',\n" +
        "\n" +
        "        # MachineX64 (/MACHINE:X64)\n" +
        "        'TargetMachine': '17',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "設定なし", en: "Not Set" },
      },
    },
    vclinkertools_details_profile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/PROFILE)\n" +
        "        'Profile': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'Profile': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_clrthreadattribute: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @1 (/CLRTHREADATTRIBUTE:NONE)\n" +
        "        'CLRThreadAttribute': '0',\n" +
        "\n" +
        "        # @2 (/CLRTHREADATTRIBUTE:MTA)\n" +
        "        'CLRThreadAttribute': '1',\n" +
        "\n" +
        "        # @3 (/CLRTHREADATTRIBUTE:STA)\n" +
        "        'CLRThreadAttribute': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "既定のスレッド属性", en: "Default threading attribute" },
        "@2": { ja: "MTA スレッド属性", en: "MTA threading attribute" },
        "@3": { ja: "STA スレッド属性", en: "STA threading attribute" },
      },
    },
    vclinkertools_details_clrimagetype: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @1\n" +
        "        'CLRImageType': '0',\n" +
        "\n" +
        "        # @2 (/CLRIMAGETYPE:IJW)\n" +
        "        'CLRImageType': '1',\n" +
        "\n" +
        "        # @3 (/CLRIMAGETYPE:PURE)\n" +
        "        'CLRImageType': '2',\n" +
        "\n" +
        "        # @4 (/CLRIMAGETYPE:SAFE)\n" +
        "        'CLRImageType': '3',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "既定のイメージ タイプ", en: "Default image type" },
        "@2": { ja: "IJW イメージの強制", en: "Force IJW image" },
        "@3": { ja: "純粋 IL イメージの強制", en: "Force Pure IL Image" },
        "@4": { ja: "安全 IL イメージの強制", en: "Force Safe IL Image" },
      },
    },
    vclinkertools_details_keycontainer: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'KeyContainer': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_clrunmanagedcodecheck: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @yes (/CLRUNMANAGEDCODECHECK)\n" +
        "        'CLRUnmanagedCodeCheck': 'true',\n" +
        "\n" +
        "        # @no (/CLRUNMANAGEDCODECHECK:NO)\n" +
        "        'CLRUnmanagedCodeCheck': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertools_details_errorreporting: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        # @1 (/ERRORREPORT:NONE)\n" +
        "        'ErrorReporting': '0',\n" +
        "\n" +
        "        # @2 (/ERRORREPORT:PROMPT)\n" +
        "        'ErrorReporting': '1',\n" +
        "\n" +
        "        # @3 (/ERRORREPORT:QUEUE)\n" +
        "        'ErrorReporting': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { ja: "エラー報告なし", en: "No Error Report" },
        "@2": { ja: "すぐにメッセージを表示", en: "PromptImmediately" },
        "@3": { ja: "次回ログインのためのキュー", en: "Queue For Next Login" },
      },
    },
    vclibrariantool_general_export_named_functions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLibrarianTool': {\n" +
        "        'ExportNamedFunctions': [\n" +
        "          'exported_function_1',\n" +
        "          'exported_function_2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclibrariantool_general_additional_dependencies: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLibrarianTool': {\n" +
        "        'AdditionalDependencies': [\n" +
        "          'liba',\n" +
        "          'libb',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclibrariantool_general_use_uUnicode_response_files: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLibrarianTool': {\n" +
        "        # @yes\n" +
        "        'UseUnicodeResponseFiles': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'UseUnicodeResponseFiles': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclibrariantool_general_suppress_startup_banner: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLibrarianTool': {\n" +
        "        # @yes (/NOLOGO)\n" +
        "        'SuppressStartupBanner': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'SuppressStartupBanner': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclibrariantool_general_output_file: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLibrarianTool': {\n" +
        "        'OutputFile': '$(OutDir)lib$(ProjectName)$(TargetExt)',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclibrariantool_general_additional_library_directories: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLibrarianTool': {\n" +
        "        'AdditionalLibraryDirectories': [\n" +
        "          'folder1',\n" +
        "          'folder2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclibrariantool_general_ignore_specific_default_libraries: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLibrarianTool': {\n" +
        "        'IgnoreSpecificDefaultLibraries': [\n" +
        "          'libcmtd.lib',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
  };
  gypcs.pages = {
    general: {
      button_index: {
        default: 2,
      },
      page_height: 509,
      descriptions: {
        type: {
          description: gypcs.descriptions.general_type,
          button_index: {
            ja: 1,
            en: 10,
          },
          button_height: 1,
        },
        characterset: {
          description: gypcs.descriptions.general_characterset,
          button_index: {
            ja: 4,
            en: 13,
          },
          button_height: 1,
        },
        toolset: {
          description: gypcs.descriptions.general_toolset,
          button_index: {
            ja: 15,
            en: 7,
          },
          button_height: 1,
        },
        targetname: {
          description: gypcs.descriptions.general_targetname,
          button_index: {
            ja: 11,
            en: 3,
          },
          button_height: 1,
        },
      },
    },
    vccompilertools_general: {
      button_index: {
        default: 6,
      },
      page_height: 509,
      descriptions: {
        includedir: {
          description: gypcs.descriptions.vccompilertools_general_includedir,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        additionalusingdirectories: {
          description: gypcs.descriptions.vccompilertools_general_additionalusingdirectories,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        debuginformationformat: {
          description: gypcs.descriptions.vccompilertools_general_debuginformationformat,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        suppressstartupbanner: {
          description: gypcs.descriptions.vccompilertools_general_suppressstartupbanner,
          button_index: {
            default: 5,
          },
          button_height: 1,
        },
        warninglevel: {
          description: gypcs.descriptions.vccompilertools_general_warninglevel,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
        warnaserror: {
          description: gypcs.descriptions.vccompilertools_general_warnaserror,
          button_index: {
            default: 7,
          },
          button_height: 1,
        },
      },
    },
    vccompilertools_optimization: {
      button_index: {
        default: 7,
      },
      page_height: 509,
      descriptions: {
        optimization: {
          description: gypcs.descriptions.vccompilertools_optimization_optimization,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        inlinefunctionexpansion: {
          description: gypcs.descriptions.vccompilertools_optimization_inlinefunctionexpansion,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        enableintrinsicfunctions: {
          description: gypcs.descriptions.vccompilertools_optimization_enableintrinsicfunctions,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        favorsizeorspeed: {
          description: gypcs.descriptions.vccompilertools_optimization_favorsizeorspeed,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        omitframepointers: {
          description: gypcs.descriptions.vccompilertools_optimization_omitframepointers,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
        enablefibersafeoptimizations: {
          description: gypcs.descriptions.vccompilertools_optimization_enablefibersafeoptimizations,
          button_index: {
            default: 5,
          },
          button_height: 1,
        },
        wholeprogramoptimization: {
          description: gypcs.descriptions.vccompilertools_optimization_wholeprogramoptimization,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
      },
    },
    vccompilertools_preprocessor: {
      button_index: {
        default: 8,
      },
      page_height: 509,
      descriptions: {
        defines: {
          description: gypcs.descriptions.vccompilertools_preprocessor_defines,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        ignorestandardincludepath: {
          description: gypcs.descriptions.vccompilertools_preprocessor_ignorestandardincludepath,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        undefineallpreprocessordefinitions: {
          description: gypcs.descriptions.vccompilertools_preprocessor_undefineallpreprocessordefinitions,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        generatepreprocessedfile: {
          description: gypcs.descriptions.vccompilertools_preprocessor_generatepreprocessedfile,
          button_index: {
            default: 4,
          },
          button_height: 2,
        },
        undefinepreprocessordefinitions: {
          description: gypcs.descriptions.vccompilertools_preprocessor_undefinepreprocessordefinitions,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        keepcomments: {
          description: gypcs.descriptions.vccompilertools_preprocessor_keepcomments,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
      },
    },
    vccompilertools_codegeneration: {
      button_index: {
        default: 9,
      },
      page_height: 509,
      descriptions: {
        stringpooling: {
          description: gypcs.descriptions.vccompilertools_codegeneration_stringpooling,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        minimalrebuild: {
          description: gypcs.descriptions.vccompilertools_codegeneration_minimalrebuild,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        exceptionhandling: {
          description: gypcs.descriptions.vccompilertools_codegeneration_exceptionhandling,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        smallertypecheck: {
          description: gypcs.descriptions.vccompilertools_codegeneration_smallertypecheck,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        basicruntimechecks: {
          description: gypcs.descriptions.vccompilertools_codegeneration_basicruntimechecks,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
        runtimelibrary: {
          description: gypcs.descriptions.vccompilertools_codegeneration_runtimelibrary,
          button_index: {
            default: 5,
          },
          button_height: 1,
        },
        structmemberalignment: {
          description: gypcs.descriptions.vccompilertools_codegeneration_structmemberalignment,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
        buffersecuritycheck: {
          description: gypcs.descriptions.vccompilertools_codegeneration_buffersecuritycheck,
          button_index: {
            default: 7,
          },
          button_height: 1,
        },
        enablefunctionlevellinking: {
          description: gypcs.descriptions.vccompilertools_codegeneration_enablefunctionlevellinking,
          button_index: {
            default: 8,
          },
          button_height: 1,
        },
        enableenhancedinstructionset: {
          description: gypcs.descriptions.vccompilertools_codegeneration_enableenhancedinstructionset,
          button_index: {
            default: 10,
          },
          button_height: 1,
        },
        floatingpointmodel: {
          description: gypcs.descriptions.vccompilertools_codegeneration_floatingpointmodel,
          button_index: {
            default: 11,
          },
          button_height: 1,
        },
        floatingpointexceptions: {
          description: gypcs.descriptions.vccompilertools_codegeneration_floatingpointexceptions,
          button_index: {
            default: 12,
          },
          button_height: 1,
        },
      },
    },
    vccompilertools_language: {
      button_index: {
        default: 10,
      },
      page_height: 509,
      descriptions: {
        disablelanguageextensions: {
          description: gypcs.descriptions.vccompilertools_language_disablelanguageextensions,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        treatwchartasbuiltintype: {
          description: gypcs.descriptions.vccompilertools_language_treatwchartasbuiltintype,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        forceconformanceinforloopscope: {
          description: gypcs.descriptions.vccompilertools_language_forceconformanceinforloopscope,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        runtimetypeinfo: {
          description: gypcs.descriptions.vccompilertools_language_runtimetypeinfo,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        openmp: {
          description: gypcs.descriptions.vccompilertools_language_openmp,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
      },
    },
    vccompilertools_precompiledheader: {
      button_index: {
        default: 11,
      },
      page_height: 509,
      descriptions: {
        useprecompiledheader: {
          description: gypcs.descriptions.vccompilertools_precompiledheader_useprecompiledheader,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        precompiledheaderthrough: {
          description: gypcs.descriptions.vccompilertools_precompiledheader_precompiledheaderthrough,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        precompiledheaderfile: {
          description: gypcs.descriptions.vccompilertools_precompiledheader_precompiledheaderfile,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
      },
    },
    vccompilertools_output: {
      button_index: {
        default: 12,
      },
      page_height: 509,
      descriptions: {
        expandattributedsource: {
          description: gypcs.descriptions.vccompilertools_output_expandattributedsource,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        assembleroutput: {
          description: gypcs.descriptions.vccompilertools_output_assembleroutput,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        assemblerlistinglocation: {
          description: gypcs.descriptions.vccompilertools_output_assemblerlistinglocation,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        objectfile: {
          description: gypcs.descriptions.vccompilertools_output_objectfile,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
        programdatabasefilename: {
          description: gypcs.descriptions.vccompilertools_output_programdatabasefilename,
          button_index: {
            default: 5,
          },
          button_height: 1,
        },
        generatexmldocumentationfiles: {
          description: gypcs.descriptions.vccompilertools_output_generatexmldocumentationfiles,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
        xmldocumentationfilename: {
          description: gypcs.descriptions.vccompilertools_output_xmldocumentationfilename,
          button_index: {
            default: 7,
          },
          button_height: 1,
        },
      },
    },
    vccompilertools_browserinformation: {
      button_index: {
        default: 13,
      },
      page_height: 509,
      descriptions: {
        browseinformation: {
          description: gypcs.descriptions.vccompilertools_browserinformation_browseinformation,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        browseinformationfile: {
          description: gypcs.descriptions.vccompilertools_browserinformation_browseinformationfile,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
      },
    },
    vccompilertools_details: {
      button_index: {
        default: 14,
      },
      page_height: 509,
      descriptions: {
        disablespecificwarnings: {
          description: gypcs.descriptions.vccompilertools_details_disablespecificwarnings,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        callingconversion: {
          description: gypcs.descriptions.vccompilertools_details_callingconversion,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        compileas: {
          description: gypcs.descriptions.vccompilertools_details_compileas,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        forcedincludefiles: {
          description: gypcs.descriptions.vccompilertools_details_forcedincludefiles,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        forcedusingfiles: {
          description: gypcs.descriptions.vccompilertools_details_forcedusingfiles,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
        showincludes: {
          description: gypcs.descriptions.vccompilertools_details_showincludes,
          button_index: {
            default: 5,
          },
          button_height: 1,
        },
        usefullpaths: {
          description: gypcs.descriptions.vccompilertools_details_usefullpaths,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
        omitdefaultlibname: {
          description: gypcs.descriptions.vccompilertools_details_omitdefaultlibname,
          button_index: {
            default: 7,
          },
          button_height: 1,
        },
        errorreporting: {
          description: gypcs.descriptions.vccompilertools_details_errorreporting,
          button_index: {
            default: 8,
          },
          button_height: 1,
        },
      },
    },
    vccompilertools_alloptions: {
      button_index: {
        default: 15
      },
      page_height: 1420,
      descriptions: {
        additionalusingdirectories: {
          description: gypcs.descriptions.vccompilertools_general_additionalusingdirectories,
          button_index: {
            en: 0,
            ja: 54,
          },
          button_height: 1,
        },
        includedir: {
          description: gypcs.descriptions.vccompilertools_general_includedir,
          button_index: {
            en: 1,
            ja: 55,
          },
          button_height: 1,
        },
        assembleroutput: {
          description: gypcs.descriptions.vccompilertools_output_assembleroutput,
          button_index: {
            en: 4,
            ja: 10,
          },
          button_height: 1,
        },
        basicruntimechecks: {
          description: gypcs.descriptions.vccompilertools_codegeneration_basicruntimechecks,
          button_index: {
            en: 5,
            ja: 35,
          },
          button_height: 1,
        },
        browseinformationfile: {
          description: gypcs.descriptions.vccompilertools_browserinformation_browseinformationfile,
          button_index: {
            en: 6,
            ja: 20,
          },
          button_height: 1,
        },
        callingconversion: {
          description: gypcs.descriptions.vccompilertools_details_callingconversion,
          button_index: {
            en: 7,
            ja: 41,
          },
          button_height: 1,
        },
        compileas: {
          description: gypcs.descriptions.vccompilertools_details_compileas,
          button_index: {
            en: 9,
            ja: 15,
          },
          button_height: 1,
        },
        debuginformationformat: {
          description: gypcs.descriptions.vccompilertools_general_debuginformationformat,
          button_index: {
            en: 12,
            ja: 17,
          },
          button_height: 1,
        },
        disablelanguageextensions: {
          description: gypcs.descriptions.vccompilertools_language_disablelanguageextensions,
          button_index: {
            en: 13,
            ja: 40,
          },
          button_height: 1,
        },
        disablespecificwarnings: {
          description: gypcs.descriptions.vccompilertools_details_disablespecificwarnings,
          button_index: {
            en: 14,
            ja: 47,
          },
          button_height: 1,
        },
        browseinformation: {
          description: gypcs.descriptions.vccompilertools_browserinformation_browseinformation,
          button_index: {
            en: 15,
            ja: 21,
          },
          button_height: 1,
        },
        exceptionhandling: {
          description: gypcs.descriptions.vccompilertools_codegeneration_exceptionhandling,
          button_index: {
            en: 16,
            ja: 1,
          },
          button_height: 1,
        },
        enableenhancedinstructionset: {
          description: gypcs.descriptions.vccompilertools_codegeneration_enableenhancedinstructionset,
          button_index: {
            en: 17,
            ja: 32,
          },
          button_height: 1,
        },
        enablefibersafeoptimizations: {
          description: gypcs.descriptions.vccompilertools_optimization_enablefibersafeoptimizations,
          button_index: {
            default: 18,
          },
          button_height: 1,
        },
        floatingpointexceptions: {
          description: gypcs.descriptions.vccompilertools_codegeneration_floatingpointexceptions,
          button_index: {
            en: 19,
            ja: 62,
          },
          button_height: 1,
        },
        enablefunctionlevellinking: {
          description: gypcs.descriptions.vccompilertools_codegeneration_enablefunctionlevellinking,
          button_index: {
            en: 20,
            ja: 34,
          },
          button_height: 1,
        },
        enableintrinsicfunctions: {
          description: gypcs.descriptions.vccompilertools_optimization_enableintrinsicfunctions,
          button_index: {
            en: 21,
            ja: 49,
          },
          button_height: 1,
        },
        minimalrebuild: {
          description: gypcs.descriptions.vccompilertools_codegeneration_minimalrebuild,
          button_index: {
            en: 22,
            ja: 44,
          },
          button_height: 1,
        },
        runtimetypeinfo: {
          description: gypcs.descriptions.vccompilertools_language_runtimetypeinfo,
          button_index: {
            en: 24,
            ja: 31,
          },
          button_height: 1,
        },
        stringpooling: {
          description: gypcs.descriptions.vccompilertools_codegeneration_stringpooling,
          button_index: {
            en: 25,
            ja: 65,
          },
          button_height: 1,
        },
        expandattributedsource: {
          description: gypcs.descriptions.vccompilertools_output_expandattributedsource,
          button_index: {
            en: 26,
            ja: 51,
          },
          button_height: 1,
        },
        favorsizeorspeed: {
          description: gypcs.descriptions.vccompilertools_optimization_favorsizeorspeed,
          button_index: {
            en: 27,
            ja: 50,
          },
          button_height: 1,
        },
        floatingpointmodel: {
          description: gypcs.descriptions.vccompilertools_codegeneration_floatingpointmodel,
          button_index: {
            en: 28,
            ja: 63,
          },
          button_height: 1,
        },
        forceconformanceinforloopscope: {
          description: gypcs.descriptions.vccompilertools_language_forceconformanceinforloopscope,
          button_index: {
            en: 29,
            ja: 2,
          },
          button_height: 1,
        },
        forcedusingfiles: {
          description: gypcs.descriptions.vccompilertools_details_forcedusingfiles,
          button_index: {
            en: 30,
            ja: 60,
          },
          button_height: 1,
        },
        forcedincludefiles: {
          description: gypcs.descriptions.vccompilertools_details_forcedincludefiles,
          button_index: {
            en: 31,
            ja: 59,
          },
          button_height: 1,
        },
        generatexmldocumentationfiles: {
          description: gypcs.descriptions.vccompilertools_output_generatexmldocumentationfiles,
          button_index: {
            en: 32,
            ja: 7,
          },
          button_height: 1,
        },
        ignorestandardincludepath: {
          description: gypcs.descriptions.vccompilertools_preprocessor_ignorestandardincludepath,
          button_index: {
            en: 33,
            ja: 61,
          },
          button_height: 1,
        },
        inlinefunctionexpansion: {
          description: gypcs.descriptions.vccompilertools_optimization_inlinefunctionexpansion,
          button_index: {
            en: 34,
            ja: 12,
          },
          button_height: 1,
        },
        errorreporting: {
          description: gypcs.descriptions.vccompilertools_details_errorreporting,
          button_index: {
            en: 35,
            ja: 58,
          },
          button_height: 1,
        },
        keepcomments: {
          description: gypcs.descriptions.vccompilertools_preprocessor_keepcomments,
          button_index: {
            en: 36,
            ja: 14,
          },
          button_height: 1,
        },
        objectfile: {
          description: gypcs.descriptions.vccompilertools_output_objectfile,
          button_index: {
            en: 38,
            ja: 13,
          },
          button_height: 1,
        },
        omitdefaultlibname: {
          description: gypcs.descriptions.vccompilertools_details_omitdefaultlibname,
          button_index: {
            en: 39,
            ja: 36,
          },
          button_height: 1,
        },
        omitframepointers: {
          description: gypcs.descriptions.vccompilertools_optimization_omitframepointers,
          button_index: {
            en: 40,
            ja: 26,
          },
          button_height: 1,
        },
        openmp: {
          description: gypcs.descriptions.vccompilertools_language_openmp,
          button_index: {
            en: 41,
            ja: 3,
          },
          button_height: 1,
        },
        optimization: {
          description: gypcs.descriptions.vccompilertools_optimization_optimization,
          button_index: {
            en: 42,
            ja: 45,
          },
          button_height: 1,
        },
        useprecompiledheader: {
          description: gypcs.descriptions.vccompilertools_precompiledheader_useprecompiledheader,
          button_index: {
            en: 43,
            ja: 22,
          },
          button_height: 1,
        },
        precompiledheaderthrough: {
          description: gypcs.descriptions.vccompilertools_precompiledheader_precompiledheaderthrough,
          button_index: {
            en: 44,
            ja: 23,
          },
          button_height: 1,
        },
        precompiledheaderfile: {
          description: gypcs.descriptions.vccompilertools_precompiledheader_precompiledheaderfile,
          button_index: {
            en: 45,
            ja: 24,
          },
          button_height: 1,
        },
        generatepreprocessedfile_a: {
          description: gypcs.descriptions.vccompilertools_preprocessor_generatepreprocessedfile,
          button_index: {
            en: 46,
            ja: 19,
          },
          button_height: 1,
        },
        generatepreprocessedfile_b: {
          description: gypcs.descriptions.vccompilertools_preprocessor_generatepreprocessedfile,
          button_index: {
            en: 47,
            ja: 43,
          },
          button_height: 1,
        },
        defines: {
          description: gypcs.descriptions.vccompilertools_preprocessor_defines,
          button_index: {
            en: 48,
            ja: 25,
          },
          button_height: 1,
        },
        programdatabasefilename: {
          description: gypcs.descriptions.vccompilertools_output_programdatabasefilename,
          button_index: {
            en: 49,
            ja: 27,
          },
          button_height: 1,
        },
        runtimelibrary: {
          description: gypcs.descriptions.vccompilertools_codegeneration_runtimelibrary,
          button_index: {
            en: 50,
            ja: 30,
          },
          button_height: 1,
        },
        buffersecuritycheck: {
          description: gypcs.descriptions.vccompilertools_codegeneration_buffersecuritycheck,
          button_index: {
            en: 52,
            ja: 16,
          },
          button_height: 1,
        },
        showincludes: {
          description: gypcs.descriptions.vccompilertools_details_showincludes,
          button_index: {
            en: 53,
            ja: 11,
          },
          button_height: 1,
        },
        smallertypecheck: {
          description: gypcs.descriptions.vccompilertools_codegeneration_smallertypecheck,
          button_index: {
            en: 54,
            ja: 48,
          },
          button_height: 1,
        },
        structmemberalignment: {
          description: gypcs.descriptions.vccompilertools_codegeneration_structmemberalignment,
          button_index: {
            en: 55,
            ja: 42,
          },
          button_height: 1,
        },
        suppressstartupbanner: {
          description: gypcs.descriptions.vccompilertools_general_suppressstartupbanner,
          button_index: {
            en: 56,
            ja: 52,
          },
          button_height: 1,
        },
        warnaserror: {
          description: gypcs.descriptions.vccompilertools_general_warnaserror,
          button_index: {
            en: 58,
            ja: 39,
          },
          button_height: 1,
        },
        treatwchartasbuiltintype: {
          description: gypcs.descriptions.vccompilertools_language_treatwchartasbuiltintype,
          button_index: {
            en: 59,
            ja: 5,
          },
          button_height: 1,
        },
        undefineallpreprocessordefinitions: {
          description: gypcs.descriptions.vccompilertools_preprocessor_undefineallpreprocessordefinitions,
          button_index: {
            en: 60,
            ja: 56,
          },
          button_height: 1,
        },
        undefinepreprocessordefinitions: {
          description: gypcs.descriptions.vccompilertools_preprocessor_undefinepreprocessordefinitions,
          button_index: {
            en: 61,
            ja: 46,
          },
          button_height: 1,
        },
        usefullpaths: {
          description: gypcs.descriptions.vccompilertools_details_usefullpaths,
          button_index: {
            en: 62,
            ja: 33,
          },
          button_height: 1,
        },
        warninglevel: {
          description: gypcs.descriptions.vccompilertools_general_warninglevel,
          button_index: {
            en: 64,
            ja: 38,
          },
          button_height: 1,
        },
        wholeprogramoptimization: {
          description: gypcs.descriptions.vccompilertools_optimization_wholeprogramoptimization,
          button_index: {
            en: 65,
            ja: 28,
          },
          button_height: 1,
        },
        xmldocumentationfilename: {
          description: gypcs.descriptions.vccompilertools_output_xmldocumentationfilename,
          button_index: {
            en: 66,
            ja: 8,
          },
          button_height: 1,
        },
      },
    },
    vclinkertools_general: {
      button_index: {
        default: 18,
      },
      page_height: 509,
      descriptions: {
        outputfile: {
          description: gypcs.descriptions.vclinkertools_general_outputfile,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        showprogress: {
          description: gypcs.descriptions.vclinkertools_general_showprogress,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        version: {
          description: gypcs.descriptions.vclinkertools_general_version,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        linkincremental: {
          description: gypcs.descriptions.vclinkertools_general_linkincremental,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        suppressstartupbanner: {
          description: gypcs.descriptions.vclinkertools_general_suppressstartupbanner,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
        ignoreimportlibrary: {
          description: gypcs.descriptions.vclinkertools_general_ignoreimportlibrary,
          button_index: {
            default: 5,
          },
          button_height: 1,
        },
        registeroutput: {
          description: gypcs.descriptions.vclinkertools_general_registeroutput,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
        peruserredirection: {
          description: gypcs.descriptions.vclinkertools_general_peruserredirection,
          button_index: {
            default: 7,
          },
          button_height: 1,
        },
        additionallibrarydirectories: {
          description: gypcs.descriptions.vclinkertools_general_additionallibrarydirectories,
          button_index: {
            default: 8,
          },
          button_height: 1,
        },
        linklibrarydependencies: {
          description: gypcs.descriptions.vclinkertools_general_linklibrarydependencies,
          button_index: {
            default: 9,
          },
          button_height: 1,
        },
        uselibrarydependencyinputs: {
          description: gypcs.descriptions.vclinkertools_general_uselibrarydependencyinputs,
          button_index: {
            default: 10,
          },
          button_height: 1,
        },
      },
    },
    vclinkertools_input: {
      button_index: {
        default: 19,
      },
      page_height: 509,
      descriptions: {
        additionaldependencies: {
          description: gypcs.descriptions.vclinkertools_input_additionaldependencies,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        ignorealldefaultlibraries: {
          description: gypcs.descriptions.vclinkertools_input_ignorealldefaultlibraries,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        ignoredefaultlibrarynames: {
          description: gypcs.descriptions.vclinkertools_input_ignoredefaultlibrarynames,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        moduledefinitionfile: {
          description: gypcs.descriptions.vclinkertools_input_moduledefinitionfile,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        addmodulenamestoassembly: {
          description: gypcs.descriptions.vclinkertools_input_addmodulenamestoassembly,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
        embedmanagedresourcefile: {
          description: gypcs.descriptions.vclinkertools_input_embedmanagedresourcefile,
          button_index: {
            default: 5,
          },
          button_height: 1,
        },
        forcesymbolreferences: {
          description: gypcs.descriptions.vclinkertools_input_forcesymbolreferences,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
        delayloaddlls: {
          description: gypcs.descriptions.vclinkertools_input_delayloaddlls,
          button_index: {
            default: 7,
          },
          button_height: 1,
        },
        assemblylinkresource: {
          description: gypcs.descriptions.vclinkertools_input_assemblylinkresource,
          button_index: {
            default: 8,
          },
          button_height: 1,
        },
      },
    },
    vclinkertools_manifestfile: {
      button_index: {
        default: 20,
      },
      page_height: 509,
      descriptions: {
        generatemanifest: {
          description: gypcs.descriptions.vclinkertools_manifestfile_generatemanifest,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        manifestfile: {
          description: gypcs.descriptions.vclinkertools_manifestfile_manifestfile,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        additionalmanifestdependencies: {
          description: gypcs.descriptions.vclinkertools_manifestfile_additionalmanifestdependencies,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        allowisolation: {
          description: gypcs.descriptions.vclinkertools_manifestfile_allowisolation,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        enableuac: {
          description: gypcs.descriptions.vclinkertools_manifestfile_enableuac,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
        uacexecutionlevel: {
          description: gypcs.descriptions.vclinkertools_manifestfile_uacexecutionlevel,
          button_index: {
            default: 5,
          },
          button_height: 1,
        },
        uacuiaccess: {
          description: gypcs.descriptions.vclinkertools_manifestfile_uacuiaccess,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
      },
    },
    vclinkertools_debug: {
      button_index: {
        default: 21,
      },
      page_height: 509,
      descriptions: {
        generatedebuginformation: {
          description: gypcs.descriptions.vclinkertools_debug_generatedebuginformation,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        programdatabasefile: {
          description: gypcs.descriptions.vclinkertools_debug_programdatabasefile,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        stripprivatesymbols: {
          description: gypcs.descriptions.vclinkertools_debug_stripprivatesymbols,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        generatemapfile: {
          description: gypcs.descriptions.vclinkertools_debug_generatemapfile,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        mapfilename: {
          description: gypcs.descriptions.vclinkertools_debug_mapfilename,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
        mapexports: {
          description: gypcs.descriptions.vclinkertools_debug_mapexports,
          button_index: {
            default: 5,
          },
          button_height: 1,
        },
        assemblydebug: {
          description: gypcs.descriptions.vclinkertools_debug_assemblydebug,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
      },
    },
    vclinkertools_system: {
      button_index: {
        default: 22,
      },
      page_height: 509,
      descriptions: {
        generatedebuginformation: {
          description: gypcs.descriptions.vclinkertools_system_generatedebuginformation,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        heapreservesize: {
          description: gypcs.descriptions.vclinkertools_system_heapreservesize,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        heapcommitsize: {
          description: gypcs.descriptions.vclinkertools_system_heapcommitsize,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        stackreservesize: {
          description: gypcs.descriptions.vclinkertools_system_stackreservesize,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
        stackcommitsize: {
          description: gypcs.descriptions.vclinkertools_system_stackcommitsize,
          button_index: {
            default: 5,
          },
          button_height: 1,
        },
        largeaddressaware: {
          description: gypcs.descriptions.vclinkertools_system_largeaddressaware,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
        terminalserveraware: {
          description: gypcs.descriptions.vclinkertools_system_terminalserveraware,
          button_index: {
            default: 7,
          },
          button_height: 1,
        },
        swaprunfromcd: {
          description: gypcs.descriptions.vclinkertools_system_swaprunfromcd,
          button_index: {
            default: 8,
          },
          button_height: 1,
        },
        swaprunfromnet: {
          description: gypcs.descriptions.vclinkertools_system_swaprunfromnet,
          button_index: {
            default: 9,
          },
          button_height: 1,
        },
        driver: {
          description: gypcs.descriptions.vclinkertools_system_driver,
          button_index: {
            default: 10,
          },
          button_height: 1,
        },
      },
    },
    vclinkertools_optimization: {
      button_index: {
        default: 23,
      },
      page_height: 509,
      descriptions: {
        optimizereferences: {
          description: gypcs.descriptions.vclinkertools_optimization_optimizereferences,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        enablecomdatfolding: {
          description: gypcs.descriptions.vclinkertools_optimization_enablecomdatfolding,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        functionorder: {
          description: gypcs.descriptions.vclinkertools_optimization_functionorder,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        profileguideddatabase: {
          description: gypcs.descriptions.vclinkertools_optimization_profileguideddatabase,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        linktimecodegeneration: {
          description: gypcs.descriptions.vclinkertools_optimization_linktimecodegeneration,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
      },
    },
    vclinkertools_embeddedidl: {
      button_index: {
        default: 24,
      },
      page_height: 509,
      descriptions: {
        midlcommandfile: {
          description: gypcs.descriptions.vclinkertools_embeddedidl_midlcommandfile,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        ignoreembeddedidl: {
          description: gypcs.descriptions.vclinkertools_embeddedidl_ignoreembeddedidl,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        mergedidlbasefilename: {
          description: gypcs.descriptions.vclinkertools_embeddedidl_mergedidlbasefilename,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        typelibraryfile: {
          description: gypcs.descriptions.vclinkertools_embeddedidl_typelibraryfile,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        typelibraryresourceid: {
          description: gypcs.descriptions.vclinkertools_embeddedidl_typelibraryresourceid,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
      },
    },
    vclinkertools_details: {
      button_index: {
        default: 26,
      },
      page_height: 526,
      descriptions: {
        entrypointsymbol: {
          description: gypcs.descriptions.vclinkertools_details_entrypointsymbol,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        setchecksum: {
          description: gypcs.descriptions.vclinkertools_details_setchecksum,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        baseaddress: {
          description: gypcs.descriptions.vclinkertools_details_baseaddress,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        randomizedbaseaddress: {
          description: gypcs.descriptions.vclinkertools_details_randomizedbaseaddress,
          button_index: {
            default: 4,
          },
          button_height: 1,
        },
        fixedbaseaddress: {
          description: gypcs.descriptions.vclinkertools_details_fixedbaseaddress,
          button_index: {
            default: 5,
          },
          button_height: 1,
        },
        dataexecutionprevention: {
          description: gypcs.descriptions.vclinkertools_details_dataexecutionprevention,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
        turnoffassemblygeneration: {
          description: gypcs.descriptions.vclinkertools_details_turnoffassemblygeneration,
          button_index: {
            default: 7,
          },
          button_height: 1,
        },
        supportunloadofdelayloadeddll: {
          description: gypcs.descriptions.vclinkertools_details_supportunloadofdelayloadeddll,
          button_index: {
            default: 8,
          },
          button_height: 1,
        },
        importlibrary: {
          description: gypcs.descriptions.vclinkertools_details_importlibrary,
          button_index: {
            default: 10,
          },
          button_height: 1,
        },
        mergesections: {
          description: gypcs.descriptions.vclinkertools_details_mergesections,
          button_index: {
            default: 11,
          },
          button_height: 1,
        },
        targetmachine: {
          description: gypcs.descriptions.vclinkertools_details_targetmachine,
          button_index: {
            default: 12,
          },
          button_height: 1,
        },
        profile: {
          description: gypcs.descriptions.vclinkertools_details_profile,
          button_index: {
            default: 13,
          },
          button_height: 1,
        },
        clrthreadattribute: {
          description: gypcs.descriptions.vclinkertools_details_clrthreadattribute,
          button_index: {
            default: 14,
          },
          button_height: 1,
        },
        clrimagetype: {
          description: gypcs.descriptions.vclinkertools_details_clrimagetype,
          button_index: {
            default: 15,
          },
          button_height: 1,
        },
        keycontainer: {
          description: gypcs.descriptions.vclinkertools_details_keycontainer,
          button_index: {
            default: 17,
          },
          button_height: 1,
        },
        clrunmanagedcodecheck: {
          description: gypcs.descriptions.vclinkertools_details_clrunmanagedcodecheck,
          button_index: {
            default: 19,
          },
          button_height: 1,
        },
        errorreporting: {
          description: gypcs.descriptions.vclinkertools_details_errorreporting,
          button_index: {
            default: 21,
          },
          button_height: 1,
        },
      },
    },
    vclibrariantool_general: {
      button_index: {
        default: 30,
      },
      page_height: 526,
      descriptions: {
        export_named_functions: {
          description: gypcs.descriptions.vclibrariantool_general_export_named_functions,
          button_index: {
            default: 7,
          },
          button_height: 1,
        },
        additional_dependencies: {
          description: gypcs.descriptions.vclibrariantool_general_additional_dependencies,
          button_index: {
            default: 1,
          },
          button_height: 1,
        },
        use_uUnicode_response_files: {
          description: gypcs.descriptions.vclibrariantool_general_use_uUnicode_response_files,
          button_index: {
            default: 9,
          },
          button_height: 1,
        },
        suppress_startup_banner: {
          description: gypcs.descriptions.vclibrariantool_general_suppress_startup_banner,
          button_index: {
            default: 3,
          },
          button_height: 1,
        },
        output_file: {
          description: gypcs.descriptions.vclibrariantool_general_output_file,
          button_index: {
            default: 0,
          },
          button_height: 1,
        },
        additional_library_directories: {
          description: gypcs.descriptions.vclibrariantool_general_additional_library_directories,
          button_index: {
            default: 2,
          },
          button_height: 1,
        },
        ignore_specific_default_libraries: {
          description: gypcs.descriptions.vclibrariantool_general_ignore_specific_default_libraries,
          button_index: {
            default: 6,
          },
          button_height: 1,
        },
      },
    },
  };

  var page_button_height = 20;
  var page_button_offset = 0;
  var description_button_distance = 21;
  var description_button_height = 19;
  var description_button_offset = 0;
  var config_panel_scale = 0.8;
  var page_width = 702;

  var $language_dropdown = $('#language_dropdown');
  var supported_language_list = ['ja', 'en'];
  for (var i = 0; i < supported_language_list.length; i++) {
    var lang = supported_language_list[i];
    var $li = $('<li></li>');
    var $a = $('<a href="#">' + lang + '</a>');
    $a.attr('href', 'javascript:window.gypcs_load_contents("' + lang + '");');
    $li.append($a);
    $language_dropdown.append($li);
  }

  /**
   * page
   */
  var select_page_by_button = function($button_element) {
    $('.config_property').css('visibility', 'hidden');
    $('.config_property').css('display', 'none');
    $('.page_select_button').removeClass('selected_button');
    var page_id = $button_element.attr('data-gypcs-page');
    $('#' + page_id).css('visibility', 'visible');
    $('#' + page_id).css('display', 'block');
    $('.config_properties').css('overflow', 'hidden');
    $('.config_properties').css('overflow-y', 'auto');
    $button_element.addClass('selected_button');
    select_description_by_button();
  };

  /**
   * description
   */
  var select_description_by_button = function($button_element) {
    $(".description").css('visibility', 'hidden');
    $(".description").css('display', 'none');

    $('.description_select_button').removeClass('selected_button');
    if ($button_element) {
      var page = $button_element.attr('data-gypcs-page')
      var description = $button_element.attr('data-gypcs-description');
      var lang = gypcs.language;
      var contents = gypcs.pages[page].descriptions[description].description['text'];
      var translations = null;
      if ('translations' in gypcs.pages[page].descriptions[description].description) {
        translations = gypcs.pages[page].descriptions[description].description['translations'];
      } else {
        translations = {};
      }
      translations['@yes'] = { ja: 'はい', en: 'Yes' };
      translations['@no'] = { ja: 'いいえ', en: 'No' };
      var original_contents = contents;
      contents = [];
      for (var i = 0; i < original_contents.length; i++) {
        var content = original_contents[i];
        for (var key in translations) {
          var value = translations[key][lang];
          while (true) {
            old = content;
            content = content.replace(key, value);
            if (old == content) {
              break;
            }
          }
        }
        contents.push(content);
      }
      $('.description').empty();
      for (var i = 0; i < contents.length; i++) {
        var content = contents[i];
        var $pre = $('<pre class="prettyprint">' + content + '</pre>');
        $('.description').append($pre);
      }
      $('.description').css('visibility', 'visible');
      $('.description').css('display', 'block');
      $button_element.addClass('selected_button');

      window.prettyPrint && prettyPrint();
    }
  };

  window.gypcs_load_contents = function(lang) {
    var $config_panel_background = $('.config_panel_background')
    $config_panel_background.attr('src', 'image/' + lang + '/config_panel.png');

    var $config_panel_contents_background_container = $('.config_panel_contents_background_container');
    $config_panel_contents_background_container.empty();

    $config_panel_contents_background = $('<img src="image/' + lang + '/listview.png" class="config_panel_contents_background"/>')
    $config_panel_contents_background_container.append($config_panel_contents_background);

    for (var page_key in gypcs.pages) {
      var page = gypcs.pages[page_key]
      var button_index = null;
      if ('default' in page.button_index) {
        button_index = page.button_index['default'];
      } else {
        button_index = page.button_index[lang];
      }
      var top = (page_button_offset + button_index * page_button_height) * config_panel_scale;
      var $div = $('<div data-gypcs-page="msvs_page_' + page_key + '" class="page_select_button" style="top: ' + top + 'px"></div>');
      $config_panel_contents_background_container.append($div);
    }

    var $config_properties = $('.config_properties');
    $config_properties.empty();
    for (var name in gypcs.pages) {
      var page = gypcs.pages[name];
      var $config_property = $('<div class="config_property" id="msvs_page_' + name + '">');
      
      var height = page.page_height * config_panel_scale - 1;
      var width = page_width * config_panel_scale - 1;
      var $div = $('<div style="width: ' + width + 'px; height: ' + height + 'px; overflow: hidden;">');
      $config_property.append($div);

      var $img = $('<img src="image/' + lang + '/page_' + name + '.png" class="config_property_background"/>');
      $div.append($img);

      for (var description_title in page.descriptions) {
        var description = page.descriptions[description_title];
        var button_index = null;
        if ('default' in description.button_index) {
          button_index = description.button_index['default'];
        } else {
          button_index = description.button_index[lang];
        }
        var button_height = description.button_height;
        var top = (description_button_offset + button_index * description_button_distance) * config_panel_scale;
        var height = button_height * description_button_height * config_panel_scale;
        var $desc_div = $('<div data-gypcs-page="' + name + '" data-gypcs-description="' + description_title + '" class="description_select_button" style="top: ' + top + 'px; height: ' + height + 'px"></div>');
        $config_property.append($desc_div);
      }

      $config_properties.append($config_property);

      gypcs.language = lang;

      $('.description_select_button').click(function(event) {
        select_description_by_button($(event.target));
      });

      $('.page_select_button').click(function(event) {
        select_page_by_button($(event.target));
      });

      // select first page and description
      select_page_by_button($('.page_select_button').first());
      select_description_by_button($('.description_select_button').first());
    }
  };

  var default_lang = 'en';
  var browser_language = function(lang) {
    var tokens = lang.split('-', 2);
    return tokens[0].toLowerCase();
  }(navigator.language);

  for (var i = 0; i < supported_language_list.length; i++) {
    if (supported_language_list[i] == browser_language) {
      default_lang = browser_language;
      break;
    }
  }
  window.gypcs_load_contents(default_lang);
});
/*
        {'VCCLCompilerTool': {
            'AdditionalIncludeDirectories': 'folder1;folder2',
            'AdditionalOptions': ['string1', 'string2'],

            // AdditionalOptions に /J が追加される。例: [&apos;-Zm256&apos;] /J 
            'DefaultCharIsUnsigned': 'true',

            'Detect64BitPortabilityProblems': 'true',

            // コード分析 (/analyze) が有効になる
            // http://msdn.microsoft.com/ja-jp/library/microsoft.visualstudio.vcprojectengine.vcclcompilertool.enableprefast.aspx
            // /analyze は x86 コンパイラ用の Enterprise (Team Developer) バージョンでのみ利用できます。
            'EnablePREfast': 'true',

            'PreprocessorDefinitions': 'string1;string2',
            'UseUnicodeResponseFiles': 'true',
         'VCLinkerTool': {
             'AdditionalDependencies_excluded': 'file3',
             'AdditionalOptions': 'a string1',
             'DelaySign': 'true',
             'KeyFile': 'a_file_name',
             'OptimizeForWindows98': '1',
             'ResourceOnlyDLL': 'true',
             'UseUnicodeResponseFiles': 'true',
         },
         'VCMIDLTool': {
             'AdditionalIncludeDirectories': 'folder1;folder2',
             'AdditionalOptions': 'a string1',
             'CPreprocessOptions': 'a string1',
             'DefaultCharType': '1',
             'DLLDataFileName': 'a_file_name',
             'EnableErrorChecks': '1',
             'ErrorCheckAllocations': 'true',
             'ErrorCheckBounds': 'true',
             'ErrorCheckEnumRange': 'true',
             'ErrorCheckRefPointers': 'true',
             'ErrorCheckStubData': 'true',
             'GenerateStublessProxies': 'true',
             'GenerateTypeLibrary': 'true',
             'HeaderFileName': 'a_file_name',
             'IgnoreStandardIncludePath': 'true',
             'InterfaceIdentifierFileName': 'a_file_name',
             'MkTypLibCompatible': 'true',
             'OutputDirectory': 'a string1',
             'PreprocessorDefinitions': 'string1;string2',
             'ProxyFileName': 'a_file_name',
             'RedirectOutputAndErrors': 'a_file_name',
             'StructMemberAlignment': '1',
             'SuppressStartupBanner': 'true',
             'TargetEnvironment': '1',
             'TypeLibraryName': 'a_file_name',
             'UndefinePreprocessorDefinitions': 'string1;string2',
             'ValidateParameters': 'true',
             'WarnAsError': 'true',
             'WarningLevel': '1'},
         'VCResourceCompilerTool': {
             'AdditionalOptions': 'a string1',
             'AdditionalIncludeDirectories': 'folder1;folder2',
             'Culture': '1003',
             'IgnoreStandardIncludePath': 'true',
             'PreprocessorDefinitions': 'string1;string2',
             'ResourceOutputFileName': 'a string1',
             'ShowProgress': 'true',
             'SuppressStartupBanner': 'true',
             'UndefinePreprocessorDefinitions': 'string1;string2'},
         'VCLibrarianTool': {
             'ForceSymbolReferences': 'a string1',
             'IgnoreAllDefaultLibraries': 'true',
             'LinkLibraryDependencies': 'true',
             'ModuleDefinitionFile': 'a_file_name',
         },
         'VCManifestTool': {
             'AdditionalManifestFiles': 'file1;file2',
             'AdditionalOptions': 'a string1',
             'AssemblyIdentity': 'a string1',
             'ComponentFileName': 'a_file_name',
             'DependencyInformationFile': 'a_file_name',
             'GenerateCatalogFiles': 'true',
             'InputResourceManifests': 'a string1',
             'ManifestResourceFile': 'a_file_name',
             'OutputManifestFile': 'a_file_name',
             'RegistrarScriptFile': 'a_file_name',
             'ReplacementsFile': 'a_file_name',
             'SuppressStartupBanner': 'true',
             'TypeLibraryFile': 'a_file_name',
             'UpdateFileHashes': 'truel',
             'UpdateFileHashesSearchPath': 'a_file_name',
             'UseFAT32Workaround': 'true',
             'UseUnicodeResponseFiles': 'true',
             'VerboseOutput': 'true'}},
*/
