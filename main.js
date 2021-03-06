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
    vcclcompilertool_general_includedir: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'include_dirs': [\n" +
        "      'C:\\SomeLibrary\\include'\n" +
        "    ]\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcclcompilertool_general_additionalusingdirectories: {
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
    vcclcompilertool_general_debuginformationformat: {
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
    vcclcompilertool_general_suppressstartupbanner: {
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
    vcclcompilertool_general_warninglevel: {
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
    vcclcompilertool_general_warnaserror: {
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
    vcclcompilertool_optimization_optimization: {
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
    vcclcompilertool_optimization_inlinefunctionexpansion: {
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
    vcclcompilertool_optimization_enableintrinsicfunctions: {
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
    vcclcompilertool_optimization_favorsizeorspeed: {
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
    vcclcompilertool_optimization_omitframepointers: {
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
    vcclcompilertool_optimization_enablefibersafeoptimizations: {
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
    vcclcompilertool_optimization_wholeprogramoptimization: {
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
    vcclcompilertool_preprocessor_defines: {
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
    vcclcompilertool_preprocessor_ignorestandardincludepath: {
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
    vcclcompilertool_preprocessor_undefineallpreprocessordefinitions: {
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
    vcclcompilertool_preprocessor_generatepreprocessedfile: {
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
    vcclcompilertool_preprocessor_undefinepreprocessordefinitions: {
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
    vcclcompilertool_preprocessor_keepcomments: {
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
    vcclcompilertool_codegeneration_stringpooling: {
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
    vcclcompilertool_codegeneration_minimalrebuild: {
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
    vcclcompilertool_codegeneration_exceptionhandling: {
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
    vcclcompilertool_codegeneration_smallertypecheck: {
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
    vcclcompilertool_codegeneration_basicruntimechecks: {
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
    vcclcompilertool_codegeneration_runtimelibrary: {
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
    vcclcompilertool_codegeneration_structmemberalignment: {
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
    vcclcompilertool_codegeneration_buffersecuritycheck: {
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
    vcclcompilertool_codegeneration_enablefunctionlevellinking: {
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
    vcclcompilertool_codegeneration_enableenhancedinstructionset: {
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
    vcclcompilertool_codegeneration_floatingpointmodel: {
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
    vcclcompilertool_codegeneration_floatingpointexceptions: {
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
    vcclcompilertool_language_disablelanguageextensions: {
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
    vcclcompilertool_language_treatwchartasbuiltintype: {
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
    vcclcompilertool_language_forceconformanceinforloopscope: {
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
    vcclcompilertool_language_runtimetypeinfo: {
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
    vcclcompilertool_language_openmp: {
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
    vcclcompilertool_precompiledheader_useprecompiledheader: {
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
    vcclcompilertool_precompiledheader_precompiledheaderthrough: {
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
    vcclcompilertool_precompiledheader_precompiledheaderfile: {
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
    vcclcompilertool_output_expandattributedsource: {
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
    vcclcompilertool_output_assembleroutput: {
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
    vcclcompilertool_output_assemblerlistinglocation: {
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
    vcclcompilertool_output_objectfile: {
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
    vcclcompilertool_output_programdatabasefilename: {
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
    vcclcompilertool_output_generatexmldocumentationfiles: {
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
    vcclcompilertool_output_xmldocumentationfilename: {
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
    vcclcompilertool_browserinformation_browseinformation: {
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
    vcclcompilertool_browserinformation_browseinformationfile: {
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
    vcclcompilertool_advanced_disablespecificwarnings: {
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
    vcclcompilertool_advanced_callingconversion: {
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
    vcclcompilertool_advanced_compileas: {
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
    vcclcompilertool_advanced_forcedincludefiles: {
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
    vcclcompilertool_advanced_forcedusingfiles: {
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
    vcclcompilertool_advanced_showincludes: {
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
    vcclcompilertool_advanced_usefullpaths: {
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
    vcclcompilertool_advanced_omitdefaultlibname: {
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
    vcclcompilertool_advanced_errorreporting: {
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
    vclinkertool_general_outputfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      '@category': {\n" +
        "        'OutputFile': '$(OutDir)$(TargetName)$(TargetExt)',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertool_general_showprogress: {
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
    vclinkertool_general_version: {
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
    vclinkertool_general_linkincremental: {
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
    vclinkertool_general_suppressstartupbanner: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      '@category': {\n" +
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
    vclinkertool_general_ignoreimportlibrary: {
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
    vclinkertool_general_registeroutput: {
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
    vclinkertool_general_peruserredirection: {
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
    vclinkertool_general_additionallibrarydirectories: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCLinkerTool': {\n" +
        "        'AdditionalLibraryDirectories': [\n" +
        "          'C:\\SomeLibrary\\lib',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertool_general_linklibrarydependencies: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      '@category': {\n" +
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
    vclinkertool_general_uselibrarydependencyinputs: {
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
    vclinkertool_input_additionaldependencies: {
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
    vclinkertool_input_ignorealldefaultlibraries: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      '@category': {\n" +
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
    vclinkertool_input_ignoredefaultlibrarynames: {
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
    vclinkertool_input_moduledefinitionfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      '@category': {\n" +
        "        'ModuleDefinitionFile': 'a_file_name.def',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertool_input_addmodulenamestoassembly: {
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
    vclinkertool_input_embedmanagedresourcefile: {
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
    vclinkertool_input_forcesymbolreferences: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      '@category': {\n" +
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
    vclinkertool_input_delayloaddlls: {
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
    vclinkertool_input_assemblylinkresource: {
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
    vclinkertool_manifestfile_generatemanifest: {
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
    vclinkertool_manifestfile_manifestfile: {
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
    vclinkertool_manifestfile_additionalmanifestdependencies: {
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
    vclinkertool_manifestfile_allowisolation: {
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
    vclinkertool_manifestfile_enableuac: {
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
    vclinkertool_manifestfile_uacexecutionlevel: {
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
    vclinkertool_manifestfile_uacuiaccess: {
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
    vclinkertool_debug_generatedebuginformation: {
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
    vclinkertool_debug_programdatabasefile: {
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
    vclinkertool_debug_stripprivatesymbols: {
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
    vclinkertool_debug_generatemapfile: {
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
    vclinkertool_debug_mapfilename: {
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
    vclinkertool_debug_mapexports: {
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
    vclinkertool_debug_assemblydebug: {
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
    vclinkertool_system_subsystem: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      '@category': {\n" +
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
    vclinkertool_system_heapreservesize: {
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
    vclinkertool_system_heapcommitsize: {
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
    vclinkertool_system_stackreservesize: {
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
    vclinkertool_system_stackcommitsize: {
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
    vclinkertool_system_largeaddressaware: {
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
    vclinkertool_system_terminalserveraware: {
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
    vclinkertool_system_swaprunfromcd: {
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
    vclinkertool_system_swaprunfromnet: {
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
    vclinkertool_system_driver: {
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
    vclinkertool_optimization_optimizereferences: {
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
    vclinkertool_optimization_enablecomdatfolding: {
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
    vclinkertool_optimization_functionorder: {
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
    vclinkertool_optimization_profileguideddatabase: {
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
    vclinkertool_optimization_linktimecodegeneration: {
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
    vclinkertool_embeddedidl_midlcommandfile: {
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
    vclinkertool_embeddedidl_ignoreembeddedidl: {
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
    vclinkertool_embeddedidl_mergedidlbasefilename: {
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
    vclinkertool_embeddedidl_typelibraryfile: {
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
    vclinkertool_embeddedidl_typelibraryresourceid: {
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
    vclinkertool_advanced_entrypointsymbol: {
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
    vclinkertool_advanced_setchecksum: {
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
    vclinkertool_advanced_baseaddress: {
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
    vclinkertool_advanced_randomizedbaseaddress: {
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
    vclinkertool_advanced_fixedbaseaddress: {
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
    vclinkertool_advanced_dataexecutionprevention: {
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
    vclinkertool_advanced_turnoffassemblygeneration: {
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
    vclinkertool_advanced_supportunloadofdelayloadeddll: {
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
    vclinkertool_advanced_importlibrary: {
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
    vclinkertool_advanced_mergesections: {
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
    vclinkertool_advanced_targetmachine: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      '@category': {\n" +
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
    vclinkertool_advanced_profile: {
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
    vclinkertool_advanced_clrthreadattribute: {
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
    vclinkertool_advanced_clrimagetype: {
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
    vclinkertool_advanced_keycontainer: {
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
    vclinkertool_advanced_clrunmanagedcodecheck: {
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
    vclinkertool_advanced_errorreporting: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      '@category': {\n" +
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
    vclinkertool_advanced_additionaloptions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      '@category': {\n" +
        "        'AdditionalOptions': 'option1 option2',\n" +
        "      },\n" +
        "    },\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vclinkertool_general_treatlinkerwarningaserrors: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      '@category': {\n" +
        "        # @yes (/WX)\n" +
        "        'TreatLinkerWarningAsErrors': 'true',\n" +
        "\n" +
        "        # @no (/WX:NO)\n" +
        "        'TreatLinkerWarningAsErrors': 'false',\n" +
        "      },\n" +
        "    },\n" +
        "  }\n" +
        "]\n",
      ],
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
    vclibrariantool_general_use_unicode_response_files: {
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
    vclibrariantool_general_suppressstartupbanner: {
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
    vclibrariantool_general_outputfile: {
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
    vcmanifesttool_general_assemblyidentity: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        'AssemblyIdentity': 'a string1',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_general_suppressstartupbanner: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        # @yes (/nologo)\n" +
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
    vcmanifesttool_general_verboseoutput: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        # @yes (/verbose)\n" +
        "        'VerboseOutput': 'true'\n" +
        "\n" +
        "        # @no\n" +
        "        'VerboseOutput': 'true'\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_inputandoutput_additionalmanifestfiles: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        'AdditionalManifestFiles': [\n" +
        "          'file1',\n" +
        "          'file2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_inputandoutput_additionaloptions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        'AdditionalOptions': 'a string1',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_inputandoutput_generatecatalogfiles: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "      # @yes (/makecdfs)\n" +
        "      'GenerateCatalogFiles': 'true',\n" +
        "\n" +
        "      # @no\n" +
        "      'GenerateCatalogFiles': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_inputandoutput_inputresourcemanifests: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        'InputResourceManifests': 'a string1',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_inputandoutput_manifestresourcefile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        'ManifestResourceFile': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_inputandoutput_outputmanifestfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        'OutputManifestFile': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_isolatedcom_componentfilename: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        'ComponentFileName': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_isolatedcom_registrarscriptfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        'RegistrarScriptFile': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_isolatedcom_replacementsfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        'ReplacementsFile': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_isolatedcom_typelibraryfile: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        'TypeLibraryFile': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_advanced_updatefilehashes: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "      # @yes (/hashupdate)\n" +
        "      'UpdateFileHashes': 'true',\n" +
        "\n" +
        "      # @no\n" +
        "      'UpdateFileHashes': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmanifesttool_advanced_updatefilehashessearchpath: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCManifestTool': {\n" +
        "        'UpdateFileHashesSearchPath': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcresourcecompilertool_general_additionalincludedirectories: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCResourceCompilerTool': {\n" +
        "        'AdditionalIncludeDirectories': [\n" +
        "          'folder3',\n" +
        "          'folder4',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcresourcecompilertool_general_culture: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCResourceCompilerTool': {\n" +
        "        # @4097 (0x1001) (/l 0x1001)\n" +
        "        'Culture': '4097',\n" +
        "\n" +
        "        # @4100 (0x1004) (/l 0x1004)\n" +
        "        'Culture': '4100',\n" +
        "\n" +
        "        # @4103 (0x1007) (/l 0x1007)\n" +
        "        'Culture': '4103',\n" +
        "\n" +
        "        # @4105 (0x1009) (/l 0x1009)\n" +
        "        'Culture': '4105',\n" +
        "\n" +
        "        # @5121 (0x1401) (/l 0x1401)\n" +
        "        'Culture': '5121',\n" +
        "\n" +
        "        # @5124 (0x1404) (/l 0x1404)\n" +
        "        'Culture': '5124',\n" +
        "\n" +
        "        # @5127 (0x1407) (/l 0x1407)\n" +
        "        'Culture': '5127',\n" +
        "\n" +
        "        # @5129 (0x1409) (/l 0x1409)\n" +
        "        'Culture': '5129',\n" +
        "\n" +
        "        # @6145 (0x1801) (/l 0x1801)\n" +
        "        'Culture': '6145',\n" +
        "\n" +
        "        # @6153 (0x1809) (/l 0x1809)\n" +
        "        'Culture': '6153',\n" +
        "\n" +
        "        # @8193 (0x2001) (/l 0x2001)\n" +
        "        'Culture': '8193',\n" +
        "\n" +
        "        # @8201 (0x2009) (/l 0x2009)\n" +
        "        'Culture': '8201',\n" +
        "\n" +
        "        # @9217 (0x2401) (/l 0x2401)\n" +
        "        'Culture': '9217',\n" +
        "\n" +
        "        # @9225 (0x2409) (/l 0x2409)\n" +
        "        'Culture': '9225',\n" +
        "\n" +
        "        # @10241 (0x2801) (/l 0x2801)\n" +
        "        'Culture': '10241',\n" +
        "\n" +
        "        # @10249 (0x2809) (/l 0x2809)\n" +
        "        'Culture': '10249',\n" +
        "\n" +
        "        # @12289 (0x3001) (/l 0x3001)\n" +
        "        'Culture': '12289',\n" +
        "\n" +
        "        # @12297 (0x3009) (/l 0x3009)\n" +
        "        'Culture': '12297',\n" +
        "\n" +
        "        # @13313 (0x3401) (/l 0x3401)\n" +
        "        'Culture': '13313',\n" +
        "\n" +
        "        # @13321 (0x3409) (/l 0x3409)\n" +
        "        'Culture': '13321',\n" +
        "\n" +
        "        # @14337 (0x3801) (/l 0x3801)\n" +
        "        'Culture': '14337',\n" +
        "\n" +
        "        # @16385 (0x4001) (/l 0x4001)\n" +
        "        'Culture': '16385',\n" +
        "\n" +
        "        # @16393 (0x4009) (/l 0x4009)\n" +
        "        'Culture': '16393',\n" +
        "\n" +
        "        # @17417 (0x4409) (/l 0x4409)\n" +
        "        'Culture': '17417',\n" +
        "\n" +
        "        # @18441 (0x4809) (/l 0x4809)\n" +
        "        'Culture': '18441',\n" +
        "\n" +
        "        # @30724 (/l 0x7804)\n" +
        "        'Culture': '30724',\n" +
        "\n" +
        "        # @30740 (0x7814) (/l 0x7814)\n" +
        "        'Culture': '30740',\n" +
        "\n" +
        "        # @30787 (0x7843) (/l 0x7843)\n" +
        "        'Culture': '30787',\n" +
        "\n" +
        "        # @30800 (0x7850) (/l 0x7850)\n" +
        "        'Culture': '30800',\n" +
        "\n" +
        "        # @1078 (0x436) (/l 0x0436)\n" +
        "        'Culture': '1078',\n" +
        "\n" +
        "        # @28 (/l 0x001c)\n" +
        "        'Culture': '28',\n" +
        "\n" +
        "        # @1052 (0x41c) (/l 0x041c)\n" +
        "        'Culture': '1052',\n" +
        "\n" +
        "        # @132 (/l 0x0084)\n" +
        "        'Culture': '132',\n" +
        "\n" +
        "        # @1156 (0x484) (/l 0x0484)\n" +
        "        'Culture': '1156',\n" +
        "\n" +
        "        # @94 (/l 0x005e)\n" +
        "        'Culture': '94',\n" +
        "\n" +
        "        # @1118 (0x45e) (/l 0x045e)\n" +
        "        'Culture': '1118',\n" +
        "\n" +
        "        # @1 (/l 0x0001)\n" +
        "        'Culture': '1',\n" +
        "\n" +
        "        # @15361 (0x3c01) (/l 0x3c01)\n" +
        "        'Culture': '15361',\n" +
        "\n" +
        "        # @3073 (0xc01) (/l 0x0c01)\n" +
        "        'Culture': '3073',\n" +
        "\n" +
        "        # @2049 (0x801) (/l 0x0801)\n" +
        "        'Culture': '2049',\n" +
        "\n" +
        "        # @11265 (0x2c01) (/l 0x2c01)\n" +
        "        'Culture': '11265',\n" +
        "\n" +
        "        # @1025 (0x401) (/l 0x0401)\n" +
        "        'Culture': '1025',\n" +
        "\n" +
        "        # @7169 (0x1c01) (/l 0x1c01)\n" +
        "        'Culture': '7169',\n" +
        "\n" +
        "        # @43 (/l 0x002b)\n" +
        "        'Culture': '43',\n" +
        "\n" +
        "        # @1067 (0x42b) (/l 0x042b)\n" +
        "        'Culture': '1067',\n" +
        "\n" +
        "        # @77 (/l 0x004d)\n" +
        "        'Culture': '77',\n" +
        "\n" +
        "        # @1101 (0x44d) (/l 0x044d)\n" +
        "        'Culture': '1101',\n" +
        "\n" +
        "        # @44 (/l 0x002c)\n" +
        "        'Culture': '44',\n" +
        "\n" +
        "        # @29740 (0x742c) (/l 0x742c)\n" +
        "        'Culture': '29740',\n" +
        "\n" +
        "        # @2092 (0x82c) (/l 0x082c)\n" +
        "        'Culture': '2092',\n" +
        "\n" +
        "        # @30764 (0x782c) (/l 0x782c)\n" +
        "        'Culture': '30764',\n" +
        "\n" +
        "        # @1068 (0x42c) (/l 0x042c)\n" +
        "        'Culture': '1068',\n" +
        "\n" +
        "        # @109 (/l 0x006d)\n" +
        "        'Culture': '109',\n" +
        "\n" +
        "        # @1133 (0x46d) (/l 0x046d)\n" +
        "        'Culture': '1133',\n" +
        "\n" +
        "        # @45 (/l 0x002d)\n" +
        "        'Culture': '45',\n" +
        "\n" +
        "        # @1069 (0x42d) (/l 0x042d)\n" +
        "        'Culture': '1069',\n" +
        "\n" +
        "        # @35 (/l 0x0023)\n" +
        "        'Culture': '35',\n" +
        "\n" +
        "        # @1059 (0x423) (/l 0x0423)\n" +
        "        'Culture': '1059',\n" +
        "\n" +
        "        # @69 (/l 0x0045)\n" +
        "        'Culture': '69',\n" +
        "\n" +
        "        # @2117 (0x845) (/l 0x0845)\n" +
        "        'Culture': '2117',\n" +
        "\n" +
        "        # @1093 (0x445) (/l 0x0445)\n" +
        "        'Culture': '1093',\n" +
        "\n" +
        "        # @30746 (/l 0x781a)\n" +
        "        'Culture': '30746',\n" +
        "\n" +
        "        # @25626 (0x641a) (/l 0x641a)\n" +
        "        'Culture': '25626',\n" +
        "\n" +
        "        # @8218 (0x201a) (/l 0x201a)\n" +
        "        'Culture': '8218',\n" +
        "\n" +
        "        # @26650 (0x681a) (/l 0x681a)\n" +
        "        'Culture': '26650',\n" +
        "\n" +
        "        # @5146 (0x141a) (/l 0x141a)\n" +
        "        'Culture': '5146',\n" +
        "\n" +
        "        # @126 (/l 0x007e)\n" +
        "        'Culture': '126',\n" +
        "\n" +
        "        # @1150 (0x47e) (/l 0x047e)\n" +
        "        'Culture': '1150',\n" +
        "\n" +
        "        # @2 (/l 0x0002)\n" +
        "        'Culture': '2',\n" +
        "\n" +
        "        # @1026 (0x402) (/l 0x0402)\n" +
        "        'Culture': '1026',\n" +
        "\n" +
        "        # @3 (/l 0x0003)\n" +
        "        'Culture': '3',\n" +
        "\n" +
        "        # @1027 (0x403) (/l 0x0403)\n" +
        "        'Culture': '1027',\n" +
        "\n" +
        "        # @4 (/l 0x0004)\n" +
        "        'Culture': '4',\n" +
        "\n" +
        "        # @2052 (0x804) (/l 0x0804)\n" +
        "        'Culture': '2052',\n" +
        "\n" +
        "        # @31748 (/l 0x7c04)\n" +
        "        'Culture': '31748',\n" +
        "\n" +
        "        # @3076 (0xc04) (/l 0x0c04)\n" +
        "        'Culture': '3076',\n" +
        "\n" +
        "        # @1028 (0x404) (/l 0x0404)\n" +
        "        'Culture': '1028',\n" +
        "\n" +
        "        # @131 (/l 0x0083)\n" +
        "        'Culture': '131',\n" +
        "\n" +
        "        # @1155 (0x483) (/l 0x0483)\n" +
        "        'Culture': '1155',\n" +
        "\n" +
        "        # @26 (/l 0x001a)\n" +
        "        'Culture': '26',\n" +
        "\n" +
        "        # @1050 (0x41a) (/l 0x041a)\n" +
        "        'Culture': '1050',\n" +
        "\n" +
        "        # @4122 (0x101a) (/l 0x101a)\n" +
        "        'Culture': '4122',\n" +
        "\n" +
        "        # @5 (/l 0x0005)\n" +
        "        'Culture': '5',\n" +
        "\n" +
        "        # @1029 (0x405) (/l 0x0405)\n" +
        "        'Culture': '1029',\n" +
        "\n" +
        "        # @6 (/l 0x0006)\n" +
        "        'Culture': '6',\n" +
        "\n" +
        "        # @1030 (0x406) (/l 0x0406)\n" +
        "        'Culture': '1030',\n" +
        "\n" +
        "        # @140 (/l 0x008c)\n" +
        "        'Culture': '140',\n" +
        "\n" +
        "        # @1164 (0x48c) (/l 0x048c)\n" +
        "        'Culture': '1164',\n" +
        "\n" +
        "        # @101 (/l 0x0065)\n" +
        "        'Culture': '101',\n" +
        "\n" +
        "        # @1125 (0x465) (/l 0x0465)\n" +
        "        'Culture': '1125',\n" +
        "\n" +
        "        # @19 (/l 0x0013)\n" +
        "        'Culture': '19',\n" +
        "\n" +
        "        # @2067 (0x813) (/l 0x0813)\n" +
        "        'Culture': '2067',\n" +
        "\n" +
        "        # @1043 (0x413) (/l 0x0413)\n" +
        "        'Culture': '1043',\n" +
        "\n" +
        "        # @9 (/l 0x0009)\n" +
        "        'Culture': '9',\n" +
        "\n" +
        "        # @3081 (0xc09) (/l 0x0c09)\n" +
        "        'Culture': '3081',\n" +
        "\n" +
        "        # @7177 (0x1c09) (/l 0x1c09)\n" +
        "        'Culture': '7177',\n" +
        "\n" +
        "        # @11273 (0x2c09) (/l 0x2c09)\n" +
        "        'Culture': '11273',\n" +
        "\n" +
        "        # @2057 (0x809) (/l 0x0809)\n" +
        "        'Culture': '2057',\n" +
        "\n" +
        "        # @1033 (0x409) (/l 0x0409)\n" +
        "        'Culture': '1033',\n" +
        "\n" +
        "        # @37 (/l 0x0025)\n" +
        "        'Culture': '37',\n" +
        "\n" +
        "        # @1061 (0x425) (/l 0x0425)\n" +
        "        'Culture': '1061',\n" +
        "\n" +
        "        # @56 (/l 0x0038)\n" +
        "        'Culture': '56',\n" +
        "\n" +
        "        # @1080 (0x438) (/l 0x0438)\n" +
        "        'Culture': '1080',\n" +
        "\n" +
        "        # @100 (/l 0x0064)\n" +
        "        'Culture': '100',\n" +
        "\n" +
        "        # @1124 (0x464) (/l 0x0464)\n" +
        "        'Culture': '1124',\n" +
        "\n" +
        "        # @11 (/l 0x000b)\n" +
        "        'Culture': '11',\n" +
        "\n" +
        "        # @1035 (0x40b) (/l 0x040b)\n" +
        "        'Culture': '1035',\n" +
        "\n" +
        "        # @12 (/l 0x000c)\n" +
        "        'Culture': '12',\n" +
        "\n" +
        "        # @2060 (0x80c) (/l 0x080c)\n" +
        "        'Culture': '2060',\n" +
        "\n" +
        "        # @3084 (0xc0c) (/l 0x0c0c)\n" +
        "        'Culture': '3084',\n" +
        "\n" +
        "        # @1036 (0x40c) (/l 0x040c)\n" +
        "        'Culture': '1036',\n" +
        "\n" +
        "        # @5132 (0x140c) (/l 0x140c)\n" +
        "        'Culture': '5132',\n" +
        "\n" +
        "        # @6156 (0x180c) (/l 0x180c)\n" +
        "        'Culture': '6156',\n" +
        "\n" +
        "        # @4108 (0x100c) (/l 0x100c)\n" +
        "        'Culture': '4108',\n" +
        "\n" +
        "        # @98 (/l 0x0062)\n" +
        "        'Culture': '98',\n" +
        "\n" +
        "        # @1122 (0x462) (/l 0x0462)\n" +
        "        'Culture': '1122',\n" +
        "\n" +
        "        # @86 (/l 0x0056)\n" +
        "        'Culture': '86',\n" +
        "\n" +
        "        # @1110 (0x456) (/l 0x0456)\n" +
        "        'Culture': '1110',\n" +
        "\n" +
        "        # @55 (/l 0x0037)\n" +
        "        'Culture': '55',\n" +
        "\n" +
        "        # @1079 (0x437) (/l 0x0437)\n" +
        "        'Culture': '1079',\n" +
        "\n" +
        "        # @7 (/l 0x0007)\n" +
        "        'Culture': '7',\n" +
        "\n" +
        "        # @3079 (0xc07) (/l 0x0c07)\n" +
        "        'Culture': '3079',\n" +
        "\n" +
        "        # @1031 (0x407) (/l 0x0407)\n" +
        "        'Culture': '1031',\n" +
        "\n" +
        "        # @2055 (0x807) (/l 0x0807)\n" +
        "        'Culture': '2055',\n" +
        "\n" +
        "        # @8 (/l 0x0008)\n" +
        "        'Culture': '8',\n" +
        "\n" +
        "        # @1032 (0x408) (/l 0x0408)\n" +
        "        'Culture': '1032',\n" +
        "\n" +
        "        # @111 (/l 0x006f)\n" +
        "        'Culture': '111',\n" +
        "\n" +
        "        # @1135 (0x46f) (/l 0x046f)\n" +
        "        'Culture': '1135',\n" +
        "\n" +
        "        # @71 (/l 0x0047)\n" +
        "        'Culture': '71',\n" +
        "\n" +
        "        # @1095 (0x447) (/l 0x0447)\n" +
        "        'Culture': '1095',\n" +
        "\n" +
        "        # @104 (/l 0x0068)\n" +
        "        'Culture': '104',\n" +
        "\n" +
        "        # @31848 (0x7c68) (/l 0x7c68)\n" +
        "        'Culture': '31848',\n" +
        "\n" +
        "        # @1128 (0x468) (/l 0x0468)\n" +
        "        'Culture': '1128',\n" +
        "\n" +
        "        # @13 (/l 0x000d)\n" +
        "        'Culture': '13',\n" +
        "\n" +
        "        # @1037 (0x40d) (/l 0x040d)\n" +
        "        'Culture': '1037',\n" +
        "\n" +
        "        # @57 (/l 0x0039)\n" +
        "        'Culture': '57',\n" +
        "\n" +
        "        # @1081 (0x439) (/l 0x0439)\n" +
        "        'Culture': '1081',\n" +
        "\n" +
        "        # @14 (/l 0x000e)\n" +
        "        'Culture': '14',\n" +
        "\n" +
        "        # @1038 (0x40e) (/l 0x040e)\n" +
        "        'Culture': '1038',\n" +
        "\n" +
        "        # @15 (/l 0x000f)\n" +
        "        'Culture': '15',\n" +
        "\n" +
        "        # @1039 (0x40f) (/l 0x040f)\n" +
        "        'Culture': '1039',\n" +
        "\n" +
        "        # @112 (/l 0x0070)\n" +
        "        'Culture': '112',\n" +
        "\n" +
        "        # @1136 (0x470) (/l 0x0470)\n" +
        "        'Culture': '1136',\n" +
        "\n" +
        "        # @33 (/l 0x0021)\n" +
        "        'Culture': '33',\n" +
        "\n" +
        "        # @1057 (0x421) (/l 0x0421)\n" +
        "        'Culture': '1057',\n" +
        "\n" +
        "        # @93 (/l 0x005d)\n" +
        "        'Culture': '93',\n" +
        "\n" +
        "        # @31837 (0x7c5d) (/l 0x7c5d)\n" +
        "        'Culture': '31837',\n" +
        "\n" +
        "        # @2141 (0x85d) (/l 0x085d)\n" +
        "        'Culture': '2141',\n" +
        "\n" +
        "        # @30813 (0x785d) (/l 0x785d)\n" +
        "        'Culture': '30813',\n" +
        "\n" +
        "        # @1117 (0x45d) (/l 0x045d)\n" +
        "        'Culture': '1117',\n" +
        "\n" +
        "        # @127 (0x7f) (/l 0x007f)\n" +
        "        'Culture': '127',\n" +
        "\n" +
        "        # @60 (/l 0x003c)\n" +
        "        'Culture': '60',\n" +
        "\n" +
        "        # @2108 (0x83c) (/l 0x083c)\n" +
        "        'Culture': '2108',\n" +
        "\n" +
        "        # @52 (/l 0x0034)\n" +
        "        'Culture': '52',\n" +
        "\n" +
        "        # @1076 (0x434) (/l 0x0434)\n" +
        "        'Culture': '1076',\n" +
        "\n" +
        "        # @53 (/l 0x0035)\n" +
        "        'Culture': '53',\n" +
        "\n" +
        "        # @1077 (0x435) (/l 0x0435)\n" +
        "        'Culture': '1077',\n" +
        "\n" +
        "        # @16 (/l 0x0010)\n" +
        "        'Culture': '16',\n" +
        "\n" +
        "        # @1040 (0x410) (/l 0x0410)\n" +
        "        'Culture': '1040',\n" +
        "\n" +
        "        # @2064 (0x810) (/l 0x0810)\n" +
        "        'Culture': '2064',\n" +
        "\n" +
        "        # @17 (/l 0x0011)\n" +
        "        'Culture': '17',\n" +
        "\n" +
        "        # @1041 (0x411) (/l 0x0411)\n" +
        "        'Culture': '1041',\n" +
        "\n" +
        "        # @75 (/l 0x004b)\n" +
        "        'Culture': '75',\n" +
        "\n" +
        "        # @1099 (0x44b) (/l 0x044b)\n" +
        "        'Culture': '1099',\n" +
        "\n" +
        "        # @63 (/l 0x003f)\n" +
        "        'Culture': '63',\n" +
        "\n" +
        "        # @1087 (0x43f) (/l 0x043f)\n" +
        "        'Culture': '1087',\n" +
        "\n" +
        "        # @83 (/l 0x0053)\n" +
        "        'Culture': '83',\n" +
        "\n" +
        "        # @1107 (0x453) (/l 0x0453)\n" +
        "        'Culture': '1107',\n" +
        "\n" +
        "        # @134 (/l 0x0086)\n" +
        "        'Culture': '134',\n" +
        "\n" +
        "        # @1158 (0x486) (/l 0x0486)\n" +
        "        'Culture': '1158',\n" +
        "\n" +
        "        # @135 (/l 0x0087)\n" +
        "        'Culture': '135',\n" +
        "\n" +
        "        # @1159 (0x487) (/l 0x0487)\n" +
        "        'Culture': '1159',\n" +
        "\n" +
        "        # @65 (/l 0x0041)\n" +
        "        'Culture': '65',\n" +
        "\n" +
        "        # @1089 (0x441) (/l 0x0441)\n" +
        "        'Culture': '1089',\n" +
        "\n" +
        "        # @87 (/l 0x0057)\n" +
        "        'Culture': '87',\n" +
        "\n" +
        "        # @1111 (0x457) (/l 0x0457)\n" +
        "        'Culture': '1111',\n" +
        "\n" +
        "        # @18 (/l 0x0012)\n" +
        "        'Culture': '18',\n" +
        "\n" +
        "        # @1042 (0x412) (/l 0x0412)\n" +
        "        'Culture': '1042',\n" +
        "\n" +
        "        # @64 (/l 0x0040)\n" +
        "        'Culture': '64',\n" +
        "\n" +
        "        # @1088 (0x440) (/l 0x0440)\n" +
        "        'Culture': '1088',\n" +
        "\n" +
        "        # @84 (/l 0x0054)\n" +
        "        'Culture': '84',\n" +
        "\n" +
        "        # @1108 (0x454) (/l 0x0454)\n" +
        "        'Culture': '1108',\n" +
        "\n" +
        "        # @38 (/l 0x0026)\n" +
        "        'Culture': '38',\n" +
        "\n" +
        "        # @1062 (0x426) (/l 0x0426)\n" +
        "        'Culture': '1062',\n" +
        "\n" +
        "        # @39 (/l 0x0027)\n" +
        "        'Culture': '39',\n" +
        "\n" +
        "        # @1063 (0x427) (/l 0x0427)\n" +
        "        'Culture': '1063',\n" +
        "\n" +
        "        # @31790 (/l 0x7c2e)\n" +
        "        'Culture': '31790',\n" +
        "\n" +
        "        # @2094 (0x82e) (/l 0x082e)\n" +
        "        'Culture': '2094',\n" +
        "\n" +
        "        # @110 (/l 0x006e)\n" +
        "        'Culture': '110',\n" +
        "\n" +
        "        # @1134 (0x46e) (/l 0x046e)\n" +
        "        'Culture': '1134',\n" +
        "\n" +
        "        # @1071 (0x42f) (/l 0x042f)\n" +
        "        'Culture': '1071',\n" +
        "\n" +
        "        # @47 (0x2f) (/l 0x002f)\n" +
        "        'Culture': '47',\n" +
        "\n" +
        "        # @62 (/l 0x003e)\n" +
        "        'Culture': '62',\n" +
        "\n" +
        "        # @2110 (0x83e) (/l 0x083e)\n" +
        "        'Culture': '2110',\n" +
        "\n" +
        "        # @1086 (0x43e) (/l 0x043e)\n" +
        "        'Culture': '1086',\n" +
        "\n" +
        "        # @76 (/l 0x004c)\n" +
        "        'Culture': '76',\n" +
        "\n" +
        "        # @1100 (0x44c) (/l 0x044c)\n" +
        "        'Culture': '1100',\n" +
        "\n" +
        "        # @58 (/l 0x003a)\n" +
        "        'Culture': '58',\n" +
        "\n" +
        "        # @1082 (0x43a) (/l 0x043a)\n" +
        "        'Culture': '1082',\n" +
        "\n" +
        "        # @129 (/l 0x0081)\n" +
        "        'Culture': '129',\n" +
        "\n" +
        "        # @1153 (0x481) (/l 0x0481)\n" +
        "        'Culture': '1153',\n" +
        "\n" +
        "        # @122 (/l 0x007a)\n" +
        "        'Culture': '122',\n" +
        "\n" +
        "        # @1146 (0x47a) (/l 0x047a)\n" +
        "        'Culture': '1146',\n" +
        "\n" +
        "        # @78 (/l 0x004e)\n" +
        "        'Culture': '78',\n" +
        "\n" +
        "        # @1102 (0x44e) (/l 0x044e)\n" +
        "        'Culture': '1102',\n" +
        "\n" +
        "        # @124 (/l 0x007c)\n" +
        "        'Culture': '124',\n" +
        "\n" +
        "        # @1148 (0x47c) (/l 0x047c)\n" +
        "        'Culture': '1148',\n" +
        "\n" +
        "        # @80 (/l 0x0050)\n" +
        "        'Culture': '80',\n" +
        "\n" +
        "        # @1104 (0x450) (/l 0x0450)\n" +
        "        'Culture': '1104',\n" +
        "\n" +
        "        # @31824 (0x7c50) (/l 0x7c50)\n" +
        "        'Culture': '31824',\n" +
        "\n" +
        "        # @2128 (0x850) (/l 0x0850)\n" +
        "        'Culture': '2128',\n" +
        "\n" +
        "        # @97 (/l 0x0061)\n" +
        "        'Culture': '97',\n" +
        "\n" +
        "        # @1121 (0x461) (/l 0x0461)\n" +
        "        'Culture': '1121',\n" +
        "\n" +
        "        # @20 (/l 0x0014)\n" +
        "        'Culture': '20',\n" +
        "\n" +
        "        # @31764 (0x7c14) (/l 0x7c14)\n" +
        "        'Culture': '31764',\n" +
        "\n" +
        "        # @1044 (0x414) (/l 0x0414)\n" +
        "        'Culture': '1044',\n" +
        "\n" +
        "        # @2068 (0x814) (/l 0x0814)\n" +
        "        'Culture': '2068',\n" +
        "\n" +
        "        # @130 (/l 0x0082)\n" +
        "        'Culture': '130',\n" +
        "\n" +
        "        # @1154 (0x482) (/l 0x0482)\n" +
        "        'Culture': '1154',\n" +
        "\n" +
        "        # @72 (/l 0x0048)\n" +
        "        'Culture': '72',\n" +
        "\n" +
        "        # @1096 (0x448) (/l 0x0448)\n" +
        "        'Culture': '1096',\n" +
        "\n" +
        "        # @99 (/l 0x0063)\n" +
        "        'Culture': '99',\n" +
        "\n" +
        "        # @1123 (0x463) (/l 0x0463)\n" +
        "        'Culture': '1123',\n" +
        "\n" +
        "        # @41 (/l 0x0029)\n" +
        "        'Culture': '41',\n" +
        "\n" +
        "        # @1065 (/l 0x0429)\n" +
        "        'Culture': '1065',\n" +
        "\n" +
        "        # @21 (/l 0x0015)\n" +
        "        'Culture': '21',\n" +
        "\n" +
        "        # @1045 (0x415) (/l 0x0415)\n" +
        "        'Culture': '1045',\n" +
        "\n" +
        "        # @22 (/l 0x0016)\n" +
        "        'Culture': '22',\n" +
        "\n" +
        "        # @1046 (0x416) (/l 0x0416)\n" +
        "        'Culture': '1046',\n" +
        "\n" +
        "        # @2070 (0x816) (/l 0x0816)\n" +
        "        'Culture': '2070',\n" +
        "\n" +
        "        # @70 (/l 0x0046)\n" +
        "        'Culture': '70',\n" +
        "\n" +
        "        # @1094 (0x446) (/l 0x0446)\n" +
        "        'Culture': '1094',\n" +
        "\n" +
        "        # @107 (/l 0x006b)\n" +
        "        'Culture': '107',\n" +
        "\n" +
        "        # @1131 (0x46b) (/l 0x046b)\n" +
        "        'Culture': '1131',\n" +
        "\n" +
        "        # @2155 (0x86b) (/l 0x086b)\n" +
        "        'Culture': '2155',\n" +
        "\n" +
        "        # @3179 (0xc6b) (/l 0x0c6b)\n" +
        "        'Culture': '3179',\n" +
        "\n" +
        "        # @24 (/l 0x0018)\n" +
        "        'Culture': '24',\n" +
        "\n" +
        "        # @1048 (0x418) (/l 0x0418)\n" +
        "        'Culture': '1048',\n" +
        "\n" +
        "        # @23 (/l 0x0017)\n" +
        "        'Culture': '23',\n" +
        "\n" +
        "        # @1047 (0x417) (/l 0x0417)\n" +
        "        'Culture': '1047',\n" +
        "\n" +
        "        # @25 (/l 0x0019)\n" +
        "        'Culture': '25',\n" +
        "\n" +
        "        # @1049 (0x419) (/l 0x0419)\n" +
        "        'Culture': '1049',\n" +
        "\n" +
        "        # @133 (/l 0x0085)\n" +
        "        'Culture': '133',\n" +
        "\n" +
        "        # @1157 (0x485) (/l 0x0485)\n" +
        "        'Culture': '1157',\n" +
        "\n" +
        "        # @28731 (0x703b) (/l 0x703b)\n" +
        "        'Culture': '28731',\n" +
        "\n" +
        "        # @31803 (0x7c3b) (/l 0x7c3b)\n" +
        "        'Culture': '31803',\n" +
        "\n" +
        "        # @59 (0x3b) (/l 0x003b)\n" +
        "        'Culture': '59',\n" +
        "\n" +
        "        # @29755 (0x743b) (/l 0x743b)\n" +
        "        'Culture': '29755',\n" +
        "\n" +
        "        # @30779 (0x783b) (/l 0x783b)\n" +
        "        'Culture': '30779',\n" +
        "\n" +
        "        # @9275 (0x243b) (/l 0x243b)\n" +
        "        'Culture': '9275',\n" +
        "\n" +
        "        # @4155 (0x103b) (/l 0x103b)\n" +
        "        'Culture': '4155',\n" +
        "\n" +
        "        # @5179 (0x143b) (/l 0x143b)\n" +
        "        'Culture': '5179',\n" +
        "\n" +
        "        # @3131 (0xc3b) (/l 0x0c3b)\n" +
        "        'Culture': '3131',\n" +
        "\n" +
        "        # @1083 (0x43b) (/l 0x043b)\n" +
        "        'Culture': '1083',\n" +
        "\n" +
        "        # @2107 (0x83b) (/l 0x083b)\n" +
        "        'Culture': '2107',\n" +
        "\n" +
        "        # @8251 (0x203b) (/l 0x203b)\n" +
        "        'Culture': '8251',\n" +
        "\n" +
        "        # @6203 (0x183b) (/l 0x183b)\n" +
        "        'Culture': '6203',\n" +
        "\n" +
        "        # @7227 (0x1c3b) (/l 0x1c3b)\n" +
        "        'Culture': '7227',\n" +
        "\n" +
        "        # @79 (/l 0x004f)\n" +
        "        'Culture': '79',\n" +
        "\n" +
        "        # @1103 (0x44f) (/l 0x044f)\n" +
        "        'Culture': '1103',\n" +
        "\n" +
        "        # @145 (/l 0x0091)\n" +
        "        'Culture': '145',\n" +
        "\n" +
        "        # @1169 (0x491) (/l 0x0491)\n" +
        "        'Culture': '1169',\n" +
        "\n" +
        "        # @31770 (/l 0x7c1a)\n" +
        "        'Culture': '31770',\n" +
        "\n" +
        "        # @27674 (0x6c1a) (/l 0x6c1a)\n" +
        "        'Culture': '27674',\n" +
        "\n" +
        "        # @7194 (0x1c1a) (/l 0x1c1a)\n" +
        "        'Culture': '7194',\n" +
        "\n" +
        "        # @12314 (0x301a) (/l 0x301a)\n" +
        "        'Culture': '12314',\n" +
        "\n" +
        "        # @3098 (0xc1a) (/l 0x0c1a)\n" +
        "        'Culture': '3098',\n" +
        "\n" +
        "        # @10266 (0x281a) (/l 0x281a)\n" +
        "        'Culture': '10266',\n" +
        "\n" +
        "        # @28698 (0x701a) (/l 0x701a)\n" +
        "        'Culture': '28698',\n" +
        "\n" +
        "        # @6170 (0x181a) (/l 0x181a)\n" +
        "        'Culture': '6170',\n" +
        "\n" +
        "        # @11290 (0x2c1a) (/l 0x2c1a)\n" +
        "        'Culture': '11290',\n" +
        "\n" +
        "        # @2074 (0x81a) (/l 0x081a)\n" +
        "        'Culture': '2074',\n" +
        "\n" +
        "        # @9242 (0x241a) (/l 0x241a)\n" +
        "        'Culture': '9242',\n" +
        "\n" +
        "        # @108 (/l 0x006c)\n" +
        "        'Culture': '108',\n" +
        "\n" +
        "        # @1132 (0x46c) (/l 0x046c)\n" +
        "        'Culture': '1132',\n" +
        "\n" +
        "        # @50 (/l 0x0032)\n" +
        "        'Culture': '50',\n" +
        "\n" +
        "        # @1074 (0x432) (/l 0x0432)\n" +
        "        'Culture': '1074',\n" +
        "\n" +
        "        # @91 (/l 0x005b)\n" +
        "        'Culture': '91',\n" +
        "\n" +
        "        # @1115 (0x45b) (/l 0x045b)\n" +
        "        'Culture': '1115',\n" +
        "\n" +
        "        # @27 (/l 0x001b)\n" +
        "        'Culture': '27',\n" +
        "\n" +
        "        # @1051 (0x41b) (/l 0x041b)\n" +
        "        'Culture': '1051',\n" +
        "\n" +
        "        # @36 (/l 0x0024)\n" +
        "        'Culture': '36',\n" +
        "\n" +
        "        # @1060 (0x424) (/l 0x0424)\n" +
        "        'Culture': '1060',\n" +
        "\n" +
        "        # @10 (/l 0x000a)\n" +
        "        'Culture': '10',\n" +
        "\n" +
        "        # @11274 (0x2c0a) (/l 0x2c0a)\n" +
        "        'Culture': '11274',\n" +
        "\n" +
        "        # @8202 (0x200a) (/l 0x200a)\n" +
        "        'Culture': '8202',\n" +
        "\n" +
        "        # @16394 (0x400a) (/l 0x400a)\n" +
        "        'Culture': '16394',\n" +
        "\n" +
        "        # @13322 (0x340a) (/l 0x340a)\n" +
        "        'Culture': '13322',\n" +
        "\n" +
        "        # @9226 (0x240a) (/l 0x240a)\n" +
        "        'Culture': '9226',\n" +
        "\n" +
        "        # @5130 (0x140a) (/l 0x140a)\n" +
        "        'Culture': '5130',\n" +
        "\n" +
        "        # @7178 (0x1c0a) (/l 0x1c0a)\n" +
        "        'Culture': '7178',\n" +
        "\n" +
        "        # @12298 (0x300a) (/l 0x300a)\n" +
        "        'Culture': '12298',\n" +
        "\n" +
        "        # @17418 (0x440a) (/l 0x440a)\n" +
        "        'Culture': '17418',\n" +
        "\n" +
        "        # @4106 (0x100a) (/l 0x100a)\n" +
        "        'Culture': '4106',\n" +
        "\n" +
        "        # @18442 (0x480a) (/l 0x480a)\n" +
        "        'Culture': '18442',\n" +
        "\n" +
        "        # @2058 (0x80a) (/l 0x080a)\n" +
        "        'Culture': '2058',\n" +
        "\n" +
        "        # @19466 (0x4c0a) (/l 0x4c0a)\n" +
        "        'Culture': '19466',\n" +
        "\n" +
        "        # @6154 (0x180a) (/l 0x180a)\n" +
        "        'Culture': '6154',\n" +
        "\n" +
        "        # @15370 (0x3c0a) (/l 0x3c0a)\n" +
        "        'Culture': '15370',\n" +
        "\n" +
        "        # @10250 (0x280a) (/l 0x280a)\n" +
        "        'Culture': '10250',\n" +
        "\n" +
        "        # @20490 (0x500a) (/l 0x500a)\n" +
        "        'Culture': '20490',\n" +
        "\n" +
        "        # @3082 (0xc0a) (/l 0x0c0a)\n" +
        "        'Culture': '3082',\n" +
        "\n" +
        "        # @21514 (0x540a) (/l 0x540a)\n" +
        "        'Culture': '21514',\n" +
        "\n" +
        "        # @14346 (0x380a) (/l 0x380a)\n" +
        "        'Culture': '14346',\n" +
        "\n" +
        "        # @29 (/l 0x001d)\n" +
        "        'Culture': '29',\n" +
        "\n" +
        "        # @2077 (0x81d) (/l 0x081d)\n" +
        "        'Culture': '2077',\n" +
        "\n" +
        "        # @1053 (0x41d) (/l 0x041d)\n" +
        "        'Culture': '1053',\n" +
        "\n" +
        "        # @90 (/l 0x005a)\n" +
        "        'Culture': '90',\n" +
        "\n" +
        "        # @1114 (0x45a) (/l 0x045a)\n" +
        "        'Culture': '1114',\n" +
        "\n" +
        "        # @40 (/l 0x0028)\n" +
        "        'Culture': '40',\n" +
        "\n" +
        "        # @31784 (0x7c28) (/l 0x7c28)\n" +
        "        'Culture': '31784',\n" +
        "\n" +
        "        # @1064 (0x428) (/l 0x0428)\n" +
        "        'Culture': '1064',\n" +
        "\n" +
        "        # @95 (/l 0x005f)\n" +
        "        'Culture': '95',\n" +
        "\n" +
        "        # @31839 (0x7c5f) (/l 0x7c5f)\n" +
        "        'Culture': '31839',\n" +
        "\n" +
        "        # @2143 (0x85f) (/l 0x085f)\n" +
        "        'Culture': '2143',\n" +
        "\n" +
        "        # @73 (/l 0x0049)\n" +
        "        'Culture': '73',\n" +
        "\n" +
        "        # @1097 (0x449) (/l 0x0449)\n" +
        "        'Culture': '1097',\n" +
        "\n" +
        "        # @68 (/l 0x0044)\n" +
        "        'Culture': '68',\n" +
        "\n" +
        "        # @1092 (0x444) (/l 0x0444)\n" +
        "        'Culture': '1092',\n" +
        "\n" +
        "        # @74 (/l 0x004a)\n" +
        "        'Culture': '74',\n" +
        "\n" +
        "        # @1098 (0x44a) (/l 0x044a)\n" +
        "        'Culture': '1098',\n" +
        "\n" +
        "        # @30 (/l 0x001e)\n" +
        "        'Culture': '30',\n" +
        "\n" +
        "        # @1054 (0x41e) (/l 0x041e)\n" +
        "        'Culture': '1054',\n" +
        "\n" +
        "        # @81 (/l 0x0051)\n" +
        "        'Culture': '81',\n" +
        "\n" +
        "        # @1105 (0x451) (/l 0x0451)\n" +
        "        'Culture': '1105',\n" +
        "\n" +
        "        # @31 (/l 0x001f)\n" +
        "        'Culture': '31',\n" +
        "\n" +
        "        # @1055 (0x41f) (/l 0x041f)\n" +
        "        'Culture': '1055',\n" +
        "\n" +
        "        # @66 (/l 0x0042)\n" +
        "        'Culture': '66',\n" +
        "\n" +
        "        # @1090 (0x442) (/l 0x0442)\n" +
        "        'Culture': '1090',\n" +
        "\n" +
        "        # @34 (/l 0x0022)\n" +
        "        'Culture': '34',\n" +
        "\n" +
        "        # @1058 (0x422) (/l 0x0422)\n" +
        "        'Culture': '1058',\n" +
        "\n" +
        "        # @46 (/l 0x002e)\n" +
        "        'Culture': '46',\n" +
        "\n" +
        "        # @1070 (0x42e) (/l 0x042e)\n" +
        "        'Culture': '1070',\n" +
        "\n" +
        "        # @32 (/l 0x0020)\n" +
        "        'Culture': '32',\n" +
        "\n" +
        "        # @1056 (0x420) (/l 0x0420)\n" +
        "        'Culture': '1056',\n" +
        "\n" +
        "        # @128 (/l 0x0080)\n" +
        "        'Culture': '128',\n" +
        "\n" +
        "        # @1152 (0x480) (/l 0x0480)\n" +
        "        'Culture': '1152',\n" +
        "\n" +
        "        # @67 (/l 0x0043)\n" +
        "        'Culture': '67',\n" +
        "\n" +
        "        # @2115 (0x843) (/l 0x0843)\n" +
        "        'Culture': '2115',\n" +
        "\n" +
        "        # @31811 (0x7c43) (/l 0x7c43)\n" +
        "        'Culture': '31811',\n" +
        "\n" +
        "        # @1091 (0x443) (/l 0x0443)\n" +
        "        'Culture': '1091',\n" +
        "\n" +
        "        # @42 (/l 0x002a)\n" +
        "        'Culture': '42',\n" +
        "\n" +
        "        # @1066 (0x42a) (/l 0x042a)\n" +
        "        'Culture': '1066',\n" +
        "\n" +
        "        # @82 (/l 0x0052)\n" +
        "        'Culture': '82',\n" +
        "\n" +
        "        # @1106 (0x452) (/l 0x0452)\n" +
        "        'Culture': '1106',\n" +
        "\n" +
        "        # @136 (/l 0x0088)\n" +
        "        'Culture': '136',\n" +
        "\n" +
        "        # @1160 (0x488) (/l 0x0488)\n" +
        "        'Culture': '1160',\n" +
        "\n" +
        "        # @120 (/l 0x0078)\n" +
        "        'Culture': '120',\n" +
        "\n" +
        "        # @1144 (0x478) (/l 0x0478)\n" +
        "        'Culture': '1144',\n" +
        "\n" +
        "        # @106 (/l 0x006a)\n" +
        "        'Culture': '106',\n" +
        "\n" +
        "        # @1130 (0x46a) (/l 0x046a)\n" +
        "        'Culture': '1130',\n" +
        "\n" +
        "        # @54 (/l 0x0036)\n" +
        "        'Culture': '54',\n" +
        "\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@4097": { en: "Arabic (Libya)", ja: "アラビア語 (リビア)" },
        "@4100": { en: "Chinese (Simplified, Singapore)", ja: "中国語 (簡体字、シンガポール)" },
        "@4103": { en: "German (Luxembourg)", ja: "ドイツ語 (ルクセンブルグ)" },
        "@4105": { en: "English (Canada)", ja: "英語 (カナダ)" },
        "@5121": { en: "Arabic (Algeria)", ja: "アラビア語 (アルジェリア)" },
        "@5124": { en: "Chinese (Traditional, Macao S.A.R.)", ja: "中国語 (繁体字、マカオ)" },
        "@5127": { en: "German (Liechtenstein)", ja: "ドイツ語 (リヒテンシュタイン)" },
        "@5129": { en: "English (New Zealand)", ja: "英語 (ニュージーランド)" },
        "@6145": { en: "Arabic (Morocco)", ja: "アラビア語 (モロッコ)" },
        "@6153": { en: "English (Ireland)", ja: "英語 (アイルランド)" },
        "@8193": { en: "Arabic (Oman)", ja: "アラビア語 (オマーン)" },
        "@8201": { en: "English (Jamaica)", ja: "英語 (ジャマイカ)" },
        "@9217": { en: "Arabic (Yemen)", ja: "アラビア語 (イエメン)" },
        "@9225": { en: "English (Caribbean)", ja: "英語 (カリブ)" },
        "@10241": { en: "Arabic (Syria)", ja: "アラビア語 (シリア)" },
        "@10249": { en: "English (Belize)", ja: "英語 (ベリーズ)" },
        "@12289": { en: "Arabic (Lebanon)", ja: "アラビア語 (レバノン)" },
        "@12297": { en: "English (Zimbabwe)", ja: "英語 (ジンバブエ)" },
        "@13313": { en: "Arabic (Kuwait)", ja: "アラビア語 (クウェート)" },
        "@13321": { en: "English (Republic of the Philippines)", ja: "英語 (フィリピン共和国)" },
        "@14337": { en: "Arabic (U.A.E.)", ja: "アラビア語 (アラブ首長国連邦)" },
        "@16385": { en: "Arabic (Qatar)", ja: "アラビア語 (カタール)" },
        "@16393": { en: "English (India)", ja: "英語 (インド)" },
        "@17417": { en: "English (Malaysia)", ja: "英語 (マレーシア)" },
        "@18441": { en: "English (Singapore)", ja: "英語 (シンガポール)" },
        "@30724": { en: "Chinese (0x7804)", ja: "中国語 (0x7804)" },
        "@30740": { en: "Norwegian (Nynorsk)", ja: "ノルウェー語 (ニーノシュク)" },
        "@30787": { en: "Uzbek (Cyrillic)", ja: "ウズベク語 (キリル)" },
        "@30800": { en: "Mongolian (Cyrillic)", ja: "モンゴル語 (キリル)" },
        "@1078": { en: "Afrikaans (South Africa)", ja: "アフリカーンス語 (南アフリカ)" },
        "@28": { en: "Albanian (0x1c)", ja: "アルバニア語 (0x1c)" },
        "@1052": { en: "Albanian (Albania)", ja: "アルバニア語 (アルバニア)" },
        "@132": { en: "Alsatian (0x84)", ja: "アルザス語 (0x84)" },
        "@1156": { en: "Alsatian (France)", ja: "アルザス語 (フランス)" },
        "@94": { en: "Amharic (0x5e)", ja: "アムハラ語 (0x5e)" },
        "@1118": { en: "Amharic (Ethiopia)", ja: "アムハラ語 (エチオピア)" },
        "@1": { en: "Arabic (0x1)", ja: "アラビア語 (0x1)" },
        "@15361": { en: "Arabic (Bahrain)", ja: "アラビア語 (バーレーン)" },
        "@3073": { en: "Arabic (Egypt)", ja: "アラビア語 (エジプト)" },
        "@2049": { en: "Arabic (Iraq)", ja: "アラビア語 (イラク)" },
        "@11265": { en: "Arabic (Jordan)", ja: "アラビア語 (ヨルダン)" },
        "@1025": { en: "Arabic (Saudi Arabia)", ja: "アラビア語 (サウジアラビア)" },
        "@7169": { en: "Arabic (Tunisia)", ja: "アラビア語 (チュニジア)" },
        "@43": { en: "Armenian (0x2b)", ja: "アルメニア語 (0x2b)" },
        "@1067": { en: "Armenian (Armenia)", ja: "アルメニア語 (アルメニア)" },
        "@77": { en: "Assamese (0x4d)", ja: "アッサム語 (0x4d)" },
        "@1101": { en: "Assamese (India)", ja: "アッサム語 (インド)" },
        "@44": { en: "Azeri (0x2c)", ja: "アゼルバイジャン語 (0x2c)" },
        "@29740": { en: "Azeri (Cyrillic)", ja: "アゼルバイジャン語 (キリル)" },
        "@2092": { en: "Azeri (Cyrillic, Azerbaijan)", ja: "アゼルバイジャン語 (キリル、アゼルバイジャン)" },
        "@30764": { en: "Azeri (Latin)", ja: "アゼルバイジャン語 (ラテン)" },
        "@1068": { en: "Azeri (Latin, Azerbaijan)", ja: "アゼルバイジャン語 (ラテン、アゼルバイジャン)" },
        "@109": { en: "Bashkir (0x6d)", ja: "バシュキール語 (0x6d)" },
        "@1133": { en: "Bashkir (Russia)", ja: "バシュキール語 (ロシア)" },
        "@45": { en: "Basque (0x2d)", ja: "バスク語 (0x2d)" },
        "@1069": { en: "Basque (Basque)", ja: "バスク語 (バスク)" },
        "@35": { en: "Belarusian (0x23)", ja: "ベラルーシ語 (0x23)" },
        "@1059": { en: "Belarusian (Belarus)", ja: "ベラルーシ語 (ベラルーシ)" },
        "@69": { en: "Bengali (0x45)", ja: "ベンガル語 (0x45)" },
        "@2117": { en: "Bengali (Bangladesh)", ja: "ベンガル語 (バングラデシュ)" },
        "@1093": { en: "Bengali (India)", ja: "ベンガル語 (インド)" },
        "@30746": { en: "Bosnian (0x781a)", ja: "ボスニア語 (0x781a)" },
        "@25626": { en: "Bosnian (Cyrillic)", ja: "ボスニア語 (キリル)" },
        "@8218": { en: "Bosnian (Cyrillic, Bosnia and Herzegovina)", ja: "ボスニア語 (キリル、ボスニア ヘルツェゴビナ)" },
        "@26650": { en: "Bosnian (Latin)", ja: "ボスニア語 (ラテン)" },
        "@5146": { en: "Bosnian (Latin, Bosnia and Herzegovina)", ja: "ボスニア語 (ラテン、ボスニア ヘルツェゴビナ)" },
        "@126": { en: "Breton (0x7e)", ja: "ブルトン語 (0x7e)" },
        "@1150": { en: "Breton (France)", ja: "ブルトン語 (フランス)" },
        "@2": { en: "Bulgarian (0x2)", ja: "ブルガリア語 (0x2)" },
        "@1026": { en: "Bulgarian (Bulgaria)", ja: "ブルガリア語 (ブルガリア)" },
        "@3": { en: "Catalan (0x3)", ja: "カタルニア語 (0x3)" },
        "@1027": { en: "Catalan (Catalan)", ja: "カタルニア語 (カタルニア)" },
        "@4": { en: "Chinese (Simplified)", ja: "簡体字中国語 (0x4)" },
        "@2052": { en: "Chinese (Simplified, PRC)", ja: "中国語 (簡体字、中国)" },
        "@31748": { en: "Chinese (Traditional)", ja: "繁体字中国語 (0x7c04)" },
        "@3076": { en: "Chinese (Traditional, Hong Kong S.A.R.)", ja: "中国語 (繁体字、香港)" },
        "@1028": { en: "Chinese (Traditional, Taiwan)", ja: "中国語 (繁体字、台湾)" },
        "@131": { en: "Corsican (0x83)", ja: "コルシカ語 (0x83)" },
        "@1155": { en: "Corsican (France)", ja: "コルシカ語 (フランス)" },
        "@26": { en: "Croatian (0x1a)", ja: "クロアチア語 (0x1a)" },
        "@1050": { en: "Croatian (Croatia)", ja: "クロアチア語 (クロアチア)" },
        "@4122": { en: "Croatian (Latin, Bosnia and Herzegovina)", ja: "クロアチア語 (ラテン、ボスニア ヘルツェゴビナ)" },
        "@5": { en: "Czech (0x5)", ja: "チェコ語 (0x5)" },
        "@1029": { en: "Czech (Czech Republic)", ja: "チェコ語 (チェコ共和国)" },
        "@6": { en: "Danish (0x6)", ja: "デンマーク語 (0x6)" },
        "@1030": { en: "Danish (Denmark)", ja: "デンマーク語 (デンマーク)" },
        "@140": { en: "Dari (0x8c)", ja: "ダリー語 (0x8c)" },
        "@1164": { en: "Dari (Afghanistan)", ja: "ダリー語 (アフガニスタン)" },
        "@101": { en: "Divehi (0x65)", ja: "ディヘビ語 (0x65)" },
        "@1125": { en: "Divehi (Maldives)", ja: "ディヘビ語 (モルディブ)" },
        "@19": { en: "Dutch (0x13)", ja: "オランダ語 (0x13)" },
        "@2067": { en: "Dutch (Belgium)", ja: "オランダ語 (ベルギー)" },
        "@1043": { en: "Dutch (Netherlands)", ja: "オランダ語 (オランダ)" },
        "@9": { en: "English (0x9)", ja: "英語 (0x9)" },
        "@3081": { en: "English (Australia)", ja: "英語 (オーストラリア)" },
        "@7177": { en: "English (South Africa)", ja: "英語 (南アフリカ)" },
        "@11273": { en: "English (Trinidad and Tobago)", ja: "英語 (トリニダード・トバゴ)" },
        "@2057": { en: "English (United Kingdom)", ja: "英語 (英国)" },
        "@1033": { en: "English (United States)", ja: "英語 (米国)" },
        "@37": { en: "Estonian (0x25)", ja: "エストニア語 (0x25)" },
        "@1061": { en: "Estonian (Estonia)", ja: "エストニア語 (エストニア)" },
        "@56": { en: "Faroese (0x38)", ja: "フェロー語 (0x38)" },
        "@1080": { en: "Faroese (Faroe Islands)", ja: "フェロー語 (フェロー諸島)" },
        "@100": { en: "Filipino (0x64)", ja: "フィリピノ語 (0x64)" },
        "@1124": { en: "Filipino (Philippines)", ja: "フィリピノ語 (フィリピン)" },
        "@11": { en: "Finnish (0xb)", ja: "フィンランド語 (0xb)" },
        "@1035": { en: "Finnish (Finland)", ja: "フィンランド語 (フィンランド)" },
        "@12": { en: "French (0xc)", ja: "フランス語 (0xc)" },
        "@2060": { en: "French (Belgium)", ja: "フランス語 (ベルギー)" },
        "@3084": { en: "French (Canada)", ja: "フランス語 (カナダ)" },
        "@1036": { en: "French (France)", ja: "フランス語 (フランス)" },
        "@5132": { en: "French (Luxembourg)", ja: "フランス語 (ルクセンブルグ)" },
        "@6156": { en: "French (Monaco)", ja: "フランス語 (モナコ)" },
        "@4108": { en: "French (Switzerland)", ja: "フランス語 (スイス)" },
        "@98": { en: "Frisian (0x62)", ja: "フリジア語 (0x62)" },
        "@1122": { en: "Frisian (Netherlands)", ja: "フリジア語 (オランダ)" },
        "@86": { en: "Galician (0x56)", ja: "ガリシア語 (0x56)" },
        "@1110": { en: "Galician (Galician)", ja: "ガリシア語 (ガリシア)" },
        "@55": { en: "Georgian (0x37)", ja: "グルジア語 (0x37)" },
        "@1079": { en: "Georgian (Georgia)", ja: "グルジア語 (グルジア)" },
        "@7": { en: "German (0x7)", ja: "ドイツ語 (0x7)" },
        "@3079": { en: "German (Austria)", ja: "ドイツ語 (オーストリア)" },
        "@1031": { en: "German (Germany)", ja: "ドイツ語 (ドイツ)" },
        "@2055": { en: "German (Switzerland)", ja: "ドイツ語 (スイス)" },
        "@8": { en: "Greek (0x8)", ja: "ギリシャ語 (0x8)" },
        "@1032": { en: "Greek (Greece)", ja: "ギリシャ語 (ギリシャ)" },
        "@111": { en: "Greenlandic (0x6f)", ja: "グリーンランド語 (0x6f)" },
        "@1135": { en: "Greenlandic (Greenland)", ja: "グリーンランド語 (グリーンランド)" },
        "@71": { en: "Gujarati (0x47)", ja: "グジャラート語 (0x47)" },
        "@1095": { en: "Gujarati (India)", ja: "グジャラート語 (インド)" },
        "@104": { en: "Hausa (0x68)", ja: "ハウサ語 (0x68)" },
        "@31848": { en: "Hausa (Latin)", ja: "ハウサ語 (ラテン)" },
        "@1128": { en: "Hausa (Latin, Nigeria)", ja: "ハウサ語 (ラテン、ナイジェリア)" },
        "@13": { en: "Hebrew (0xd)", ja: "ヘブライ語 (0xd)" },
        "@1037": { en: "Hebrew (Israel)", ja: "ヘブライ語 (イスラエル)" },
        "@57": { en: "Hindi (0x39)", ja: "ヒンディー語 (0x39)" },
        "@1081": { en: "Hindi (India)", ja: "ヒンディー語 (インド)" },
        "@14": { en: "Hungarian (0xe)", ja: "ハンガリー語 (0xe)" },
        "@1038": { en: "Hungarian (Hungary)", ja: "ハンガリー語 (ハンガリー)" },
        "@15": { en: "Icelandic (0xf)", ja: "アイスランド語 (0xf)" },
        "@1039": { en: "Icelandic (Iceland)", ja: "アイスランド語 (アイスランド)" },
        "@112": { en: "Igbo (0x70)", ja: "イボ語 (0x70)" },
        "@1136": { en: "Igbo (Nigeria)", ja: "イボ語 (ナイジェリア)" },
        "@33": { en: "Indonesian (0x21)", ja: "インドネシア語 (0x21)" },
        "@1057": { en: "Indonesian (Indonesia)", ja: "インドネシア語 (インドネシア)" },
        "@93": { en: "Inuktitut (0x5d)", ja: "イヌクティトット語 (0x5d)" },
        "@31837": { en: "Inuktitut (Latin)", ja: "イヌクティトット語 (ラテン)" },
        "@2141": { en: "Inuktitut (Latin, Canada)", ja: "イヌクティトット語 (ラテン、カナダ)" },
        "@30813": { en: "Inuktitut (Syllabics)", ja: "イヌクティトット語 (音節)" },
        "@1117": { en: "Inuktitut (Syllabics, Canada)", ja: "イヌクティトット語 (カナダ音節文字、カナダ)" },
        "@127": { en: "Invariant Language (Invariant Country)", ja: "ロケールに依存しない言語 (ロケールに依存しない国)" },
        "@60": { en: "Irish (0x3c)", ja: "アイルランド語 (0x3c)" },
        "@2108": { en: "Irish (Ireland)", ja: "アイルランド語 (アイルランド)" },
        "@52": { en: "isiXhosa (0x34)", ja: "コサ語 (0x34)" },
        "@1076": { en: "isiXhosa (South Africa)", ja: "コサ語 (南アフリカ)" },
        "@53": { en: "isiZulu (0x35)", ja: "ズールー語 (0x35)" },
        "@1077": { en: "isiZulu (South Africa)", ja: "ズールー語 (南アフリカ)" },
        "@16": { en: "Italian (0x10)", ja: "イタリア語 (0x10)" },
        "@1040": { en: "Italian (Italy)", ja: "イタリア語 (イタリア)" },
        "@2064": { en: "Italian (Switzerland)", ja: "イタリア語 (スイス)" },
        "@17": { en: "Japanese (0x11)", ja: "日本語 (0x11)" },
        "@1041": { en: "Japanese (Japan)", ja: "日本語 (日本)" },
        "@75": { en: "Kannada (0x4b)", ja: "カナラ語 (0x4b)" },
        "@1099": { en: "Kannada (India)", ja: "カナラ語 (インド)" },
        "@63": { en: "Kazakh (0x3f)", ja: "カザフ語 (0x3f)" },
        "@1087": { en: "Kazakh (Kazakhstan)", ja: "カザーフ語 (カザフスタン)" },
        "@83": { en: "Khmer (0x53)", ja: "クメール語 (0x53)" },
        "@1107": { en: "Khmer (Cambodia)", ja: "クメール語 (カンボジア)" },
        "@134": { en: "K'iche (0x86)", ja: "キチェ語 (0x86)" },
        "@1158": { en: "K'iche (Guatemala)", ja: "キチェ語 (グアテマラ)" },
        "@135": { en: "Kinyarwanda (0x87)", ja: "キニヤルワンダ語 (0x87)" },
        "@1159": { en: "Kinyarwanda (Rwanda)", ja: "キニヤルワンダ語 (ルワンダ)" },
        "@65": { en: "Kiswahili (0x41)", ja: "スワヒリ語 (0x41)" },
        "@1089": { en: "Kiswahili (Kenya)", ja: "スワヒリ語 (ケニア)" },
        "@87": { en: "Konkani (0x57)", ja: "コンカニ語 (0x57)" },
        "@1111": { en: "Konkani (India)", ja: "コンカニ語 (インド)" },
        "@18": { en: "Korean (0x12)", ja: "韓国語 (0x12)" },
        "@1042": { en: "Korean (Korea)", ja: "韓国語 (韓国)" },
        "@64": { en: "Kyrgyz (0x40)", ja: "キルギス語 (0x40)" },
        "@1088": { en: "Kyrgyz (Kyrgyzstan)", ja: "キルギス語 (キルギス)" },
        "@84": { en: "Lao (0x54)", ja: "ラオス語 (0x54)" },
        "@1108": { en: "Lao (Lao P.D.R.)", ja: "ラオス語 (ラオス人民民主共和国)" },
        "@38": { en: "Latvian (0x26)", ja: "ラトビア語 (0x26)" },
        "@1062": { en: "Latvian (Latvia)", ja: "ラトビア語 (ラトビア)" },
        "@39": { en: "Lithuanian (0x27)", ja: "リトアニア語 (0x27)" },
        "@1063": { en: "Lithuanian (Lithuania)", ja: "リトアニア語 (リトアニア)" },
        "@31790": { en: "Lower Sorbian (0x7c2e)", ja: "下ソルブ語 (0x7c2e)" },
        "@2094": { en: "Lower Sorbian (Germany)", ja: "下ソルブ語 (ドイツ)" },
        "@110": { en: "Luxembourgish (0x6e)", ja: "ルクセングルグ語 (0x6e)" },
        "@1134": { en: "Luxembourgish (Luxembourg)", ja: "ルクセングルグ語 (ルクセンブルグ)" },
        "@1071": { en: "Macedonian (Former Yugoslav Republic of Macedonia)", ja: "マケドニア語 (マケドニア旧ユーゴスラビア共和国)" },
        "@47": { en: "Macedonian (FYROM)", ja: "マケドニア語 (FYROM)" },
        "@62": { en: "Malay (0x3e)", ja: "マレー語 (0x3e)" },
        "@2110": { en: "Malay (Brunei Darussalam)", ja: "マレー語 (ブルネイ・ダルサラーム国)" },
        "@1086": { en: "Malay (Malaysia)", ja: "マレー語 (マレーシア)" },
        "@76": { en: "Malayalam (0x4c)", ja: "マラヤーラム語 (0x4c)" },
        "@1100": { en: "Malayalam (India)", ja: "マラヤラム語 (インド)" },
        "@58": { en: "Maltese (0x3a)", ja: "マルタ語 (0x3a)" },
        "@1082": { en: "Maltese (Malta)", ja: "マルタ語 (マルタ)" },
        "@129": { en: "Maori (0x81)", ja: "マオリ語 (0x81)" },
        "@1153": { en: "Maori (New Zealand)", ja: "マオリ語 (ニュージーランド)" },
        "@122": { en: "Mapudungun (0x7a)", ja: "マプドゥングン語 (0x7a)" },
        "@1146": { en: "Mapudungun (Chile)", ja: "マプドゥングン語 (チリ)" },
        "@78": { en: "Marathi (0x4e)", ja: "マラーティー語 (0x4e)" },
        "@1102": { en: "Marathi (India)", ja: "マラーティー語 (インド)" },
        "@124": { en: "Mohawk (0x7c)", ja: "モホーク語 (0x7c)" },
        "@1148": { en: "Mohawk (Mohawk)", ja: "モホーク語 (モホーク)" },
        "@80": { en: "Mongolian (0x50)", ja: "モンゴル語 (0x50)" },
        "@1104": { en: "Mongolian (Cyrillic, Mongolia)", ja: "モンゴル語 (キリル、モンゴル)" },
        "@31824": { en: "Mongolian (Traditional Mongolian)", ja: "モンゴル語 (伝統的モンゴル文字)" },
        "@2128": { en: "Mongolian (Traditional Mongolian, PRC)", ja: "モンゴル語 (伝統的モンゴル文字、中国)" },
        "@97": { en: "Nepali (0x61)", ja: "ネパール語 (0x61)" },
        "@1121": { en: "Nepali (Nepal)", ja: "ネパール語 (ネパール)" },
        "@20": { en: "Norwegian (0x14)", ja: "ノルウェー語 (0x14)" },
        "@31764": { en: "Norwegian (Bokmål)", ja: "ノルウェー語 (ブークモール)" },
        "@1044": { en: "Norwegian, Bokmål (Norway)", ja: "ノルウェー語 ブークモール (ノルウェー)" },
        "@2068": { en: "Norwegian, Nynorsk (Norway)", ja: "ノルウェー語 ニーノシク (ノルウェー)" },
        "@130": { en: "Occitan (0x82)", ja: "オクシタン語 (0x82)" },
        "@1154": { en: "Occitan (France)", ja: "オクシタン語 (フランス)" },
        "@72": { en: "Oriya (0x48)", ja: "オリヤー語 (0x48)" },
        "@1096": { en: "Oriya (India)", ja: "オリヤー語 (インド)" },
        "@99": { en: "Pashto (0x63)", ja: "パシュトゥー語  (0x63)" },
        "@1123": { en: "Pashto (Afghanistan)", ja: "パシュトゥー語 (アフガニスタン)" },
        "@41": { en: "Persian (0x29)", ja: "ペルシャ語 (0x29)" },
        "@1065": { en: "Persian (0x429)", ja: "ペルシャ語 (0x429)" },
        "@21": { en: "Polish (0x15)", ja: "ポーランド語 (0x15)" },
        "@1045": { en: "Polish (Poland)", ja: "ポーランド語 (ポーランド)" },
        "@22": { en: "Portuguese (0x16)", ja: "ポルトガル語 (0x16)" },
        "@1046": { en: "Portuguese (Brazil)", ja: "ポルトガル語 (ブラジル)" },
        "@2070": { en: "Portuguese (Portugal)", ja: "ポルトガル語 (ポルトガル)" },
        "@70": { en: "Punjabi (0x46)", ja: "パンジャーブ語 (0x46)" },
        "@1094": { en: "Punjabi (India)", ja: "パンジャーブ語 (インド)" },
        "@107": { en: "Quechua (0x6b)", ja: "ケチュア語 (0x6b)" },
        "@1131": { en: "Quechua (Bolivia)", ja: "ケチュア語 (ボリビア)" },
        "@2155": { en: "Quechua (Ecuador)", ja: "ケチュア語 (エクアドル)" },
        "@3179": { en: "Quechua (Peru)", ja: "ケチュア語 (ペルー)" },
        "@24": { en: "Romanian (0x18)", ja: "ルーマニア語 (0x18)" },
        "@1048": { en: "Romanian (Romania)", ja: "ルーマニア語 (ルーマニア)" },
        "@23": { en: "Romansh (0x17)", ja: "ロマンシュ語 (0x17)" },
        "@1047": { en: "Romansh (Switzerland)", ja: "ロマンシュ語 (スイス)" },
        "@25": { en: "Russian (0x19)", ja: "ロシア語 (0x19)" },
        "@1049": { en: "Russian (Russia)", ja: "ロシア語 (ロシア)" },
        "@133": { en: "Sakha (0x85)", ja: "サハ語 (0x85)" },
        "@1157": { en: "Sakha (Russia)", ja: "サハ語 (ロシア)" },
        "@28731": { en: "Sami (Inari)", ja: "サーミ語 (イナリ)" },
        "@31803": { en: "Sami (Lule)", ja: "サーミ語 (ルレ)" },
        "@59": { en: "Sami (Northern)", ja: "サーミ語 (北)" },
        "@29755": { en: "Sami (Skolt)", ja: "サーミ語 (スコルト)" },
        "@30779": { en: "Sami (Southern)", ja: "サーミ語 (南)" },
        "@9275": { en: "Sami, Inari (Finland)", ja: "イナリ サーミ語 (フィンランド)" },
        "@4155": { en: "Sami, Lule (Norway)", ja: "ルレ サーミ語 (ノルウェー)" },
        "@5179": { en: "Sami, Lule (Sweden)", ja: "ルレ サーミ語 (スウェーデン)" },
        "@3131": { en: "Sami, Northern (Finland)", ja: "北サーミ語 (フィンランド)" },
        "@1083": { en: "Sami, Northern (Norway)", ja: "北サーミ語 (ノルウェー)" },
        "@2107": { en: "Sami, Northern (Sweden)", ja: "北サーミ語 (スウェーデン)" },
        "@8251": { en: "Sami, Skolt (Finland)", ja: "スコルト サーミ語 (フィンランド)" },
        "@6203": { en: "Sami, Southern (Norway)", ja: "南サーミ語 (ノルウェー)" },
        "@7227": { en: "Sami, Southern (Sweden)", ja: "南サーミ語 (スウェーデン)" },
        "@79": { en: "Sanskrit (0x4f)", ja: "サンスクリット語 (0x4f)" },
        "@1103": { en: "Sanskrit (India)", ja: "サンスクリット語 (インド)" },
        "@145": { en: "Scottish Gaelic (0x91)", ja: "スコットランド ゲール語 (0x91)" },
        "@1169": { en: "Scottish Gaelic (United Kingdom)", ja: "スコットランド ゲール語 (英国)" },
        "@31770": { en: "Serbian (0x7c1a)", ja: "セルビア語 (0x7c1a)" },
        "@27674": { en: "Serbian (Cyrillic)", ja: "セルビア語 (キリル)" },
        "@7194": { en: "Serbian (Cyrillic, Bosnia and Herzegovina)", ja: "セルビア語 (キリル、ボスニア ヘルツェゴビナ)" },
        "@12314": { en: "Serbian (Cyrillic, Montenegro)", ja: "セルビア語 (キリル、モンテネグロ)" },
        "@3098": { en: "Serbian (Cyrillic, Serbia and Montenegro (Former))", ja: "セルビア語 (キリル、セルビアおよびモンテネグロ (旧))" },
        "@10266": { en: "Serbian (Cyrillic, Serbia)", ja: "セルビア語 (キリル、セルビア)" },
        "@28698": { en: "Serbian (Latin)", ja: "セルビア語 (ラテン)" },
        "@6170": { en: "Serbian (Latin, Bosnia and Herzegovina)", ja: "セルビア語 (ラテン、ボスニア ヘルツェゴビナ)" },
        "@11290": { en: "Serbian (Latin, Montenegro)", ja: "セルビア語 (ラテン、モンテネグロ)" },
        "@2074": { en: "Serbian (Latin, Serbia and Montenegro (Former))", ja: "セルビア語 (ラテン、セルビアおよびモンテネグロ (旧))" },
        "@9242": { en: "Serbian (Latin, Serbia)", ja: "セルビア語 (ラテン、セルビア)" },
        "@108": { en: "Sesotho sa Leboa (0x6c)", ja: "セソト サ レボア語 (0x6c)" },
        "@1132": { en: "Sesotho sa Leboa (South Africa)", ja: "セソト サ レボア語 (南アフリカ)" },
        "@50": { en: "Setswana (0x32)", ja: "セツワナ語 (0x32)" },
        "@1074": { en: "Setswana (South Africa)", ja: "セツワナ語 (南アフリカ)" },
        "@91": { en: "Sinhala (0x5b)", ja: "シンハラ語 (0x5b)" },
        "@1115": { en: "Sinhala (Sri Lanka)", ja: "シンハラ語 (スリランカ)" },
        "@27": { en: "Slovak (0x1b)", ja: "スロバキア語 (0x1b)" },
        "@1051": { en: "Slovak (Slovakia)", ja: "スロバキア語 (スロバキア)" },
        "@36": { en: "Slovenian (0x24)", ja: "スロベニア語 (0x24)" },
        "@1060": { en: "Slovenian (Slovenia)", ja: "スロベニア語 (スロベニア)" },
        "@10": { en: "Spanish (0xa)", ja: "スペイン語 (0xa)" },
        "@11274": { en: "Spanish (Argentina)", ja: "スペイン語 (アルゼンチン)" },
        "@8202": { en: "Spanish (Bolivarian Republic of Venezuela)", ja: "スペイン語 (ベネズエラ ボリバル共和国)" },
        "@16394": { en: "Spanish (Bolivia)", ja: "スペイン語 (ボリビア)" },
        "@13322": { en: "Spanish (Chile)", ja: "スペイン語 (チリ)" },
        "@9226": { en: "Spanish (Colombia)", ja: "スペイン語 (コロンビア)" },
        "@5130": { en: "Spanish (Costa Rica)", ja: "スペイン語 (コスタリカ)" },
        "@7178": { en: "Spanish (Dominican Republic)", ja: "スペイン語 (ドミニカ共和国)" },
        "@12298": { en: "Spanish (Ecuador)", ja: "スペイン語 (エクアドル)" },
        "@17418": { en: "Spanish (El Salvador)", ja: "スペイン語 (エルサルバドル)" },
        "@4106": { en: "Spanish (Guatemala)", ja: "スペイン語 (グアテマラ)" },
        "@18442": { en: "Spanish (Honduras)", ja: "スペイン語 (ホンジュラス)" },
        "@2058": { en: "Spanish (Mexico)", ja: "スペイン語 (メキシコ)" },
        "@19466": { en: "Spanish (Nicaragua)", ja: "スペイン語 (ニカラグア)" },
        "@6154": { en: "Spanish (Panama)", ja: "スペイン語 (パナマ)" },
        "@15370": { en: "Spanish (Paraguay)", ja: "スペイン語 (パラグアイ)" },
        "@10250": { en: "Spanish (Peru)", ja: "スペイン語 (ペルー)" },
        "@20490": { en: "Spanish (Puerto Rico)", ja: "スペイン語 (プエルトリコ)" },
        "@3082": { en: "Spanish (Spain)", ja: "スペイン語 (スペイン)" },
        "@21514": { en: "Spanish (United States)", ja: "スペイン語 (米国)" },
        "@14346": { en: "Spanish (Uruguay)", ja: "スペイン語 (ウルグアイ)" },
        "@29": { en: "Swedish (0x1d)", ja: "スウェーデン語 (0x1d)" },
        "@2077": { en: "Swedish (Finland)", ja: "スウェーデン語 (フィンランド)" },
        "@1053": { en: "Swedish (Sweden)", ja: "スウェーデン語 (スウェーデン)" },
        "@90": { en: "Syriac (0x5a)", ja: "シリア語 (0x5a)" },
        "@1114": { en: "Syriac (Syria)", ja: "シリア語 (シリア)" },
        "@40": { en: "Tajik (0x28)", ja: "タジク語 (0x28)" },
        "@31784": { en: "Tajik (Cyrillic)", ja: "タジク語 (キリル)" },
        "@1064": { en: "Tajik (Cyrillic, Tajikistan)", ja: "タジク語 (キリル、タジキスタン)" },
        "@95": { en: "Tamazight (0x5f)", ja: "タマジット語 (0x5f)" },
        "@31839": { en: "Tamazight (Latin)", ja: "タマジット語 (ラテン)" },
        "@2143": { en: "Tamazight (Latin, Algeria)", ja: "タマジット語 (ラテン、アルジェリア)" },
        "@73": { en: "Tamil (0x49)", ja: "タミール語 (0x49)" },
        "@1097": { en: "Tamil (India)", ja: "タミール語 (インド)" },
        "@68": { en: "Tatar (0x44)", ja: "タタール語 (0x44)" },
        "@1092": { en: "Tatar (Russia)", ja: "タタール語 (ロシア)" },
        "@74": { en: "Telugu (0x4a)", ja: "テルグ語 (0x4a)" },
        "@1098": { en: "Telugu (India)", ja: "テルグ語 (インド)" },
        "@30": { en: "Thai (0x1e)", ja: "タイ語 (0x1e)" },
        "@1054": { en: "Thai (Thailand)", ja: "タイ語 (タイ)" },
        "@81": { en: "Tibetan (0x51)", ja: "チベット語 (0x51)" },
        "@1105": { en: "Tibetan (PRC)", ja: "チベット語 (中国)" },
        "@31": { en: "Turkish (0x1f)", ja: "トルコ語 (0x1f)" },
        "@1055": { en: "Turkish (Turkey)", ja: "トルコ語 (トルコ)" },
        "@66": { en: "Turkmen (0x42)", ja: "トルクメン語 (0x42)" },
        "@1090": { en: "Turkmen (Turkmenistan)", ja: "トルクメン語 (トルクメニスタン)" },
        "@34": { en: "Ukrainian (0x22)", ja: "ウクライナ語 (0x22)" },
        "@1058": { en: "Ukrainian (Ukraine)", ja: "ウクライナ語 (ウクライナ)" },
        "@46": { en: "Upper Sorbian (0x2e)", ja: "上ソルブ語 (0x2e)" },
        "@1070": { en: "Upper Sorbian (Germany)", ja: "上ソルブ語 (ドイツ)" },
        "@32": { en: "Urdu (0x20)", ja: "ウルドゥー語 (0x20)" },
        "@1056": { en: "Urdu (Islamic Republic of Pakistan)", ja: "ウルドゥー語 (パキスタン・イスラム共和国)" },
        "@128": { en: "Uyghur (0x80)", ja: "ウイグル語 (0x80)" },
        "@1152": { en: "Uyghur (PRC)", ja: "ウイグル語 (中国)" },
        "@67": { en: "Uzbek (0x43)", ja: "ウズベク語 (0x43)" },
        "@2115": { en: "Uzbek (Cyrillic, Uzbekistan)", ja: "ウズベク語 (キリル、ウズベキスタン)" },
        "@31811": { en: "Uzbek (Latin)", ja: "ウズベク語 (ラテン)" },
        "@1091": { en: "Uzbek (Latin, Uzbekistan)", ja: "ウズベク語 (ラテン、ウズベキスタン)" },
        "@42": { en: "Vietnamese (0x2a)", ja: "ベトナム語 (0x2a)" },
        "@1066": { en: "Vietnamese (Vietnam)", ja: "ベトナム語 (ベトナム)" },
        "@82": { en: "Welsh (0x52)", ja: "ウェールズ語 (0x52)" },
        "@1106": { en: "Welsh (United Kingdom)", ja: "ウェールズ語 (英国)" },
        "@136": { en: "Wolof (0x88)", ja: "ウォロフ語 (0x88)" },
        "@1160": { en: "Wolof (Senegal)", ja: "ウォロフ語 (セネガル)" },
        "@120": { en: "Yi (0x78)", ja: "イ語 (0x78)" },
        "@1144": { en: "Yi (PRC)", ja: "イ語 (中国)" },
        "@106": { en: "Yoruba (0x6a)", ja: "ヨルバ語 (0x6a)" },
        "@1130": { en: "Yoruba (Nigeria)", ja: "ヨルバ語 (ナイジェリア)" },
        "@54": { en: "Afrikaans (0x36)", ja: "アフリカーンス語 (0x36)" },
      },
    },
    vcresourcecompilertool_general_ignorestandardincludepath: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCResourceCompilerTool': {\n" +
        "        # @yes (/X)\n" +
        "        'IgnoreStandardIncludePath': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'IgnoreStandardIncludePath': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcresourcecompilertool_general_preprocessordefinitions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCResourceCompilerTool': {\n" +
        "        'PreprocessorDefinitions': [\n" +
        "          'string1',\n" +
        "          'string2',\n" +
        "         ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcresourcecompilertool_general_resourceoutputfilename: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCResourceCompilerTool': {\n" +
        "        'ResourceOutputFileName': '$(IntDir)%(Filename).res',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcresourcecompilertool_general_showprogress: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCResourceCompilerTool': {\n" +
        "        # @yes (/v)\n" +
        "        'ShowProgress': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'ShowProgress': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcresourcecompilertool_general_suppressstartupbanner: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCResourceCompilerTool': {\n" +
        "        # @yes (/nologo)\n" +
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
    vcresourcecompilertool_general_undefinepreprocessordefinitions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCResourceCompilerTool': {\n" +
        "        'UndefinePreprocessorDefinitions': [\n" +
        "          'string1',\n" +
        "          'string2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcresourcecompilertool_alloptions_additionaloptions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCResourceCompilerTool': {\n" +
        "        'AdditionalOptions': 'a string1',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_general_additionalincludedirectories: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'AdditionalIncludeDirectories': [\n" +
        "          'folder1',\n" +
        "          'folder2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_general_defaultchartype: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # Unsigned (/char unsigned)\n" +
        "        'DefaultCharType': '0',\n" +
        "\n" +
        "        # Signed (/char signed)\n" +
        "        'DefaultCharType': '1',\n" +
        "\n" +
        "        # Ascii (/char ascii7)\n" +
        "        'DefaultCharType': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_general_generatestublessproxies: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes (/Oicf)\n" +
        "        'GenerateStublessProxies': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'GenerateStublessProxies': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_general_ignorestandardincludepath: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes (/no_def_idir)\n" +
        "        'IgnoreStandardIncludePath': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'IgnoreStandardIncludePath': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_general_mktyplibcompatible: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes (/mktyplib203)\n" +
        "        'MkTypLibCompatible': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'MkTypLibCompatible': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_general_preprocessordefinitions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'PreprocessorDefinitions': [\n" +
        "          'string1',\n" +
        "          'string2',\n" +
        "         ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_general_suppressstartupbanner: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes (/nologo)\n" +
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
    vcmidltool_general_targetenvironment: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @1\n" +
        "        'TargetEnvironment': '0',\n" +
        "\n" +
        "        # @2 (/env win32)\n" +
        "        'TargetEnvironment': '1',\n" +
        "\n" +
        "        # @3 (/env ia64)\n" +
        "        'TargetEnvironment': '2',\n" +
        "\n" +
        "        # @4 (/env x64)\n" +
        "        'TargetEnvironment': '3',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { en: "Not Set", ja: "設定なし" },
        "@2": { en: "Microsoft Windows 32-bit", ja: "Microsoft Windows 32 ビット" },
        "@3": { en: "Microsoft Windows 64-bit on Itanium", ja: "Microsoft Windows Itanium の 64 ビット" },
        "@4": { en: "Microsoft Windows 64-bit on x64", ja: "Microsoft Windows x64 の 64 ビット" },
      }
    },
    vcmidltool_general_warnaserror: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes (/WX)\n" +
        "        'WarnAsError': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'WarnAsError': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_general_warninglevel: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # 1 (/W0)\n" +
        "        'WarningLevel': '0'\n" +
        "\n" +
        "        # 1 (/W1)\n" +
        "        'WarningLevel': '1'\n" +
        "\n" +
        "        # 2 (/W2)\n" +
        "        'WarningLevel': '2'\n" +
        "\n" +
        "        # 3 (/W3)\n" +
        "        'WarningLevel': '3'\n" +
        "\n" +
        "        # 4 (/W4)\n" +
        "        'WarningLevel': '4'\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_output_dlldatafilename: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'DLLDataFileName': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_output_generatetypelibrary: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes\n" +
        "        'GenerateTypeLibrary': 'true',\n" +
        "\n" +
        "        # @no (/notlb)\n" +
        "        'GenerateTypeLibrary': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_output_headerfilename: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'HeaderFileName': '%(Filename)_h.h',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_output_interfaceidentifierfilename: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'InterfaceIdentifierFileName': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_output_outputdirectory: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'OutputDirectory': 'a string1',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_output_proxyfilename: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'ProxyFileName': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_output_typelibraryname: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'TypeLibraryName': '$(IntDir)$(ProjectName).tlb',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_advanced_cpreprocessoptions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'CPreprocessOptions': 'a string1',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_advanced_enableerrorchecks: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @1 (/error none)\n" +
        "        'EnableErrorChecks': '1',\n" +
        "\n" +
        "        # @2 (/error all)\n" +
        "        'EnableErrorChecks': '2',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { en: "None", ja: "なし" },
        "@2": { en: "All", ja: "すべて" },
      },
    },
    vcmidltool_advanced_errorcheckallocations: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes (/error allocation)\n" +
        "        'ErrorCheckAllocations': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'ErrorCheckAllocations': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_advanced_errorcheckbounds: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes (/error bounds_check)\n" +
        "        'ErrorCheckBounds': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'ErrorCheckBounds': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_advanced_errorcheckenumrange: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes (/error enum)\n" +
        "        'ErrorCheckEnumRange': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'ErrorCheckEnumRange': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_advanced_errorcheckrefpointers: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes (/error ref)\n" +
        "        'ErrorCheckRefPointers': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'ErrorCheckRefPointers': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_advanced_errorcheckstubdata: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes (/error stub_data)\n" +
        "        'ErrorCheckStubData': 'true',\n" +
        "\n" +
        "        # @no\n" +
        "        'ErrorCheckStubData': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_advanced_redirectoutputanderrors: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'RedirectOutputAndErrors': 'a_file_name',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_advanced_structmemberalignment: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @1\n" +
        "        'StructMemberAlignment': '0',\n" +
        "\n" +
        "        # 1 @2 (/Zp1)\n" +
        "        'StructMemberAlignment': '1',\n" +
        "\n" +
        "        # 2 @2 (/Zp2)\n" +
        "        'StructMemberAlignment': '2',\n" +
        "\n" +
        "        # 4 @2 (/Zp4)\n" +
        "        'StructMemberAlignment': '3',\n" +
        "\n" +
        "        # 8 @2 (/Zp8)\n" +
        "        'StructMemberAlignment': '4',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
      translations: {
        "@1": { en: "Not Set", ja: "設定なし" },
        "@2": { en: "Byte", ja: "バイト" },
      },
    },
    vcmidltool_advanced_undefinepreprocessordefinitions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'UndefinePreprocessorDefinitions': [\n" +
        "          'string1',\n" +
        "          'string2',\n" +
        "        ],\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_advanced_validateparameters: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        # @yes (/robust)\n" +
        "        'ValidateParameters': 'true',\n" +
        "\n" +
        "        # @no (/no_robust)\n" +
        "        'ValidateParameters': 'false',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
    vcmidltool_alloptions_additionaloptions: {
      text: [
        "'targets': [\n" +
        "  {\n" +
        "    'msvs_settings': {\n" +
        "      'VCMIDLTool': {\n" +
        "        'AdditionalOptions': 'a string1',\n" +
        "      },\n" +
        "    }\n" +
        "  }\n" +
        "]\n",
      ],
    },
  };
  gypcs.descriptions.vcclcompilertool_preprocessor_generatepreprocessedfile_a = gypcs.descriptions.vcclcompilertool_preprocessor_generatepreprocessedfile;
  gypcs.descriptions.vcclcompilertool_preprocessor_generatepreprocessedfile_b = gypcs.descriptions.vcclcompilertool_preprocessor_generatepreprocessedfile;

  gypcs.pages = {
    general: {
      button_index: {
        default: 2,
      },
      page_height: 509,
      descriptions: {
        type: {
          description: 'general_type',
          button_index: {
            ja: 1,
            en: 10,
          },
        },
        characterset: {
          description: 'general_characterset',
          button_index: {
            ja: 4,
            en: 13,
          },
        },
        toolset: {
          description: 'general_toolset',
          button_index: {
            ja: 15,
            en: 7,
          },
        },
        targetname: {
          description: 'general_targetname',
          button_index: {
            ja: 11,
            en: 3,
          },
        },
      },
    },
    vcclcompilertool_general: {
      button_index: {
        default: 6,
      },
      page_height: 509,
      category: 'VCCLCompilerTool',
      descriptions: {
        includedir: {
          description: 'vcclcompilertool_general_includedir',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 1,
            ja: 55,
          },
        },
        additionalusingdirectories: {
          description: 'vcclcompilertool_general_additionalusingdirectories',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 0,
            ja: 54,
          },
        },
        debuginformationformat: {
          description: 'vcclcompilertool_general_debuginformationformat',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 12,
            ja: 17,
          },
        },
        suppressstartupbanner: {
          description: 'vcclcompilertool_general_suppressstartupbanner',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 56,
            ja: 52,
          },
        },
        warninglevel: {
          description: 'vcclcompilertool_general_warninglevel',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 64,
            ja: 38,
          },
        },
        warnaserror: {
          description: 'vcclcompilertool_general_warnaserror',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 58,
            ja: 39,
          },
        },
      },
    },
    vcclcompilertool_optimization: {
      button_index: {
        default: 7,
      },
      page_height: 509,
      category: 'VCCLCompilerTool',
      descriptions: {
        optimization: {
          description: 'vcclcompilertool_optimization_optimization',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 42,
            ja: 45,
          },
        },
        inlinefunctionexpansion: {
          description: 'vcclcompilertool_optimization_inlinefunctionexpansion',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 34,
            ja: 12,
          },
        },
        enableintrinsicfunctions: {
          description: 'vcclcompilertool_optimization_enableintrinsicfunctions',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 21,
            ja: 49,
          },
        },
        favorsizeorspeed: {
          description: 'vcclcompilertool_optimization_favorsizeorspeed',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 27,
            ja: 50,
          },
        },
        omitframepointers: {
          description: 'vcclcompilertool_optimization_omitframepointers',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 40,
            ja: 26,
          },
        },
        enablefibersafeoptimizations: {
          description: 'vcclcompilertool_optimization_enablefibersafeoptimizations',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            default: 18,
          },
        },
        wholeprogramoptimization: {
          description: 'vcclcompilertool_optimization_wholeprogramoptimization',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 65,
            ja: 28,
          },
        },
      },
    },
    vcclcompilertool_preprocessor: {
      button_index: {
        default: 8,
      },
      page_height: 509,
      category: 'VCCLCompilerTool',
      descriptions: {
        defines: {
          description: 'vcclcompilertool_preprocessor_defines',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 48,
            ja: 25,
          },
        },
        ignorestandardincludepath: {
          description: 'vcclcompilertool_preprocessor_ignorestandardincludepath',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 33,
            ja: 61,
          },
        },
        undefineallpreprocessordefinitions: {
          description: 'vcclcompilertool_preprocessor_undefineallpreprocessordefinitions',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 60,
            ja: 56,
          },
        },
        generatepreprocessedfile_a: {
          description: 'vcclcompilertool_preprocessor_generatepreprocessedfile_a',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 46,
            ja: 19,
          },
        },
        generatepreprocessedfile_b: {
          description: 'vcclcompilertool_preprocessor_generatepreprocessedfile_b',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 47,
            ja: 43,
          },
        },
        undefinepreprocessordefinitions: {
          description: 'vcclcompilertool_preprocessor_undefinepreprocessordefinitions',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 61,
            ja: 46,
          },
        },
        keepcomments: {
          description: 'vcclcompilertool_preprocessor_keepcomments',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 36,
            ja: 14,
          },
        },
      },
    },
    vcclcompilertool_codegeneration: {
      button_index: {
        default: 9,
      },
      page_height: 509,
      category: 'VCCLCompilerTool',
      descriptions: {
        stringpooling: {
          description: 'vcclcompilertool_codegeneration_stringpooling',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 25,
            ja: 65,
          },
        },
        minimalrebuild: {
          description: 'vcclcompilertool_codegeneration_minimalrebuild',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 22,
            ja: 44,
          },
        },
        exceptionhandling: {
          description: 'vcclcompilertool_codegeneration_exceptionhandling',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 16,
            ja: 1,
          },
        },
        smallertypecheck: {
          description: 'vcclcompilertool_codegeneration_smallertypecheck',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 54,
            ja: 48,
          },
        },
        basicruntimechecks: {
          description: 'vcclcompilertool_codegeneration_basicruntimechecks',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 5,
            ja: 35,
          },
        },
        runtimelibrary: {
          description: 'vcclcompilertool_codegeneration_runtimelibrary',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 50,
            ja: 30,
          },
        },
        structmemberalignment: {
          description: 'vcclcompilertool_codegeneration_structmemberalignment',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 55,
            ja: 42,
          },
        },
        buffersecuritycheck: {
          description: 'vcclcompilertool_codegeneration_buffersecuritycheck',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 52,
            ja: 16,
          },
        },
        enablefunctionlevellinking: {
          description: 'vcclcompilertool_codegeneration_enablefunctionlevellinking',
          button_index: {
            default: 8,
          },
          alloptions_button_index: {
            en: 20,
            ja: 34,
          },
        },
        enableenhancedinstructionset: {
          description: 'vcclcompilertool_codegeneration_enableenhancedinstructionset',
          button_index: {
            default: 10,
          },
          alloptions_button_index: {
            en: 17,
            ja: 32,
          },
        },
        floatingpointmodel: {
          description: 'vcclcompilertool_codegeneration_floatingpointmodel',
          button_index: {
            default: 11,
          },
          alloptions_button_index: {
            en: 28,
            ja: 63,
          },
        },
        floatingpointexceptions: {
          description: 'vcclcompilertool_codegeneration_floatingpointexceptions',
          button_index: {
            default: 12,
          },
          alloptions_button_index: {
            en: 19,
            ja: 62,
          },
        },
      },
    },
    vcclcompilertool_language: {
      button_index: {
        default: 10,
      },
      page_height: 509,
      category: 'VCCLCompilerTool',
      descriptions: {
        disablelanguageextensions: {
          description: 'vcclcompilertool_language_disablelanguageextensions',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 13,
            ja: 40,
          },
        },
        treatwchartasbuiltintype: {
          description: 'vcclcompilertool_language_treatwchartasbuiltintype',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 59,
            ja: 5,
          },
        },
        forceconformanceinforloopscope: {
          description: 'vcclcompilertool_language_forceconformanceinforloopscope',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 29,
            ja: 2,
          },
        },
        runtimetypeinfo: {
          description: 'vcclcompilertool_language_runtimetypeinfo',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 24,
            ja: 31,
          },
        },
        openmp: {
          description: 'vcclcompilertool_language_openmp',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 41,
            ja: 3,
          },
        },
      },
    },
    vcclcompilertool_precompiledheader: {
      button_index: {
        default: 11,
      },
      page_height: 509,
      category: 'VCCLCompilerTool',
      descriptions: {
        useprecompiledheader: {
          description: 'vcclcompilertool_precompiledheader_useprecompiledheader',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 43,
            ja: 22,
          },
        },
        precompiledheaderthrough: {
          description: 'vcclcompilertool_precompiledheader_precompiledheaderthrough',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 44,
            ja: 23,
          },
        },
        precompiledheaderfile: {
          description: 'vcclcompilertool_precompiledheader_precompiledheaderfile',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 45,
            ja: 24,
          },
        },
      },
    },
    vcclcompilertool_output: {
      button_index: {
        default: 12,
      },
      page_height: 509,
      category: 'VCCLCompilerTool',
      descriptions: {
        expandattributedsource: {
          description: 'vcclcompilertool_output_expandattributedsource',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 26,
            ja: 51,
          },
        },
        assembleroutput: {
          description: 'vcclcompilertool_output_assembleroutput',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 4,
            ja: 10,
          },
        },
        assemblerlistinglocation: {
          description: 'vcclcompilertool_output_assemblerlistinglocation',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 3,
            ja: 0,
          },
        },
        objectfile: {
          description: 'vcclcompilertool_output_objectfile',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 38,
            ja: 13,
          },
        },
        programdatabasefilename: {
          description: 'vcclcompilertool_output_programdatabasefilename',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 49,
            ja: 27,
          },
        },
        generatexmldocumentationfiles: {
          description: 'vcclcompilertool_output_generatexmldocumentationfiles',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 32,
            ja: 7,
          },
        },
        xmldocumentationfilename: {
          description: 'vcclcompilertool_output_xmldocumentationfilename',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 66,
            ja: 8,
          },
        },
      },
    },
    vcclcompilertool_browserinformation: {
      button_index: {
        default: 13,
      },
      page_height: 509,
      category: 'VCCLCompilerTool',
      descriptions: {
        browseinformation: {
          description: 'vcclcompilertool_browserinformation_browseinformation',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 15,
            ja: 21,
          },
        },
        browseinformationfile: {
          description: 'vcclcompilertool_browserinformation_browseinformationfile',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 6,
            ja: 20,
          },
        },
      },
    },
    vcclcompilertool_advanced: {
      button_index: {
        default: 14,
      },
      page_height: 509,
      category: 'VCCLCompilerTool',
      descriptions: {
        disablespecificwarnings: {
          description: 'vcclcompilertool_advanced_disablespecificwarnings',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 14,
            ja: 47,
          },
        },
        callingconversion: {
          description: 'vcclcompilertool_advanced_callingconversion',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 7,
            ja: 41,
          },
        },
        compileas: {
          description: 'vcclcompilertool_advanced_compileas',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 9,
            ja: 15,
          },
        },
        forcedincludefiles: {
          description: 'vcclcompilertool_advanced_forcedincludefiles',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 31,
            ja: 59,
          },
        },
        forcedusingfiles: {
          description: 'vcclcompilertool_advanced_forcedusingfiles',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 30,
            ja: 60,
          },
        },
        showincludes: {
          description: 'vcclcompilertool_advanced_showincludes',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 53,
            ja: 11,
          },
        },
        usefullpaths: {
          description: 'vcclcompilertool_advanced_usefullpaths',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 62,
            ja: 33,
          },
        },
        omitdefaultlibname: {
          description: 'vcclcompilertool_advanced_omitdefaultlibname',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 39,
            ja: 36,
          },
        },
        errorreporting: {
          description: 'vcclcompilertool_advanced_errorreporting',
          button_index: {
            default: 8,
          },
          alloptions_button_index: {
            en: 35,
            ja: 58,
          },
        },
      },
    },
    vcclcompilertool_alloptions: {
      button_index: {
        default: 15,
      },
      page_height: 1420,
      descriptions: {
      },
    },
    vclinkertool_general: {
      button_index: {
        default: 18,
      },
      page_height: 509,
      category: 'VCLinkerTool',
      descriptions: {
        outputfile: {
          description: 'vclinkertool_general_outputfile',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 57,
            ja: 76,
          },
        },
        showprogress: {
          description: 'vclinkertool_general_showprogress',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 68,
            ja: 77,
          },
        },
        version: {
          description: 'vclinkertool_general_version',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 87,
            ja: 44,
          },
        },
        linkincremental: {
          description: 'vclinkertool_general_linkincremental',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 20,
            ja: 19,
          },
        },
        suppressstartupbanner: {
          description: 'vclinkertool_general_suppressstartupbanner',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 74,
            ja: 84,
          },
        },
        ignoreimportlibrary: {
          description: 'vclinkertool_general_ignoreimportlibrary',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 38,
            ja: 21,
          },
        },
        registeroutput: {
          description: 'vclinkertool_general_registeroutput',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 65,
            ja: 75,
          },
        },
        peruserredirection: {
          description: 'vclinkertool_general_peruserredirection',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 58,
            ja: 63,
          },
        },
        additionallibrarydirectories: {
          description: 'vclinkertool_general_additionallibrarydirectories',
          button_index: {
            default: 8,
          },
          alloptions_button_index: {
            en: 2,
            ja: 87,
          },
        },
        linklibrarydependencies: {
          description: 'vclinkertool_general_linklibrarydependencies',
          button_index: {
            default: 9,
          },
          alloptions_button_index: {
            en: 44,
            ja: 64,
          },
        },
        uselibrarydependencyinputs: {
          description: 'vclinkertool_general_uselibrarydependencyinputs',
          button_index: {
            default: 10,
          },
          alloptions_button_index: {
            en: 86,
            ja: 65,
          },
        },
        treatlinkerwarningaserrors: {
          description: 'vclinkertool_general_treatlinkerwarningaserrors',
          button_index: {
            default: 13,
          },
          alloptions_button_index: {
            en: 79,
            ja: 67,
          },
        },
      },
    },
    vclinkertool_input: {
      button_index: {
        default: 19,
      },
      page_height: 509,
      category: 'VCLinkerTool',
      descriptions: {
        additionaldependencies: {
          description: 'vclinkertool_input_additionaldependencies',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 1,
            ja: 88,
          },
        },
        ignorealldefaultlibraries: {
          description: 'vclinkertool_input_ignorealldefaultlibraries',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 36,
            ja: 32,
          },
        },
        ignoredefaultlibrarynames: {
          description: 'vclinkertool_input_ignoredefaultlibrarynames',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 39,
            ja: 89,
          },
        },
        moduledefinitionfile: {
          description: 'vclinkertool_input_moduledefinitionfile',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 54,
            ja: 61,
          },
        },
        addmodulenamestoassembly: {
          description: 'vclinkertool_input_addmodulenamestoassembly',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 0,
            ja: 60,
          },
        },
        embedmanagedresourcefile: {
          description: 'vclinkertool_input_embedmanagedresourcefile',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 18,
            ja: 59,
          },
        },
        forcesymbolreferences: {
          description: 'vclinkertool_input_forcesymbolreferences',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 27,
            ja: 29,
          },
        },
        delayloaddlls: {
          description: 'vclinkertool_input_delayloaddlls',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 14,
            ja: 5,
          },
        },
        assemblylinkresource: {
          description: 'vclinkertool_input_assemblylinkresource',
          button_index: {
            default: 8,
          },
          alloptions_button_index: {
            en: 6,
            ja: 17,
          },
        },
      },
    },
    vclinkertool_manifestfile: {
      button_index: {
        default: 20,
      },
      page_height: 509,
      category: 'VCLinkerTool',
      descriptions: {
        generatemanifest: {
          description: 'vclinkertool_manifestfile_generatemanifest',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 30,
            ja: 58,
          },
        },
        manifestfile: {
          description: 'vclinkertool_manifestfile_manifestfile',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 47,
            ja: 57,
          },
        },
        additionalmanifestdependencies: {
          description: 'vclinkertool_manifestfile_additionalmanifestdependencies',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 3,
            ja: 86,
          },
        },
        allowisolation: {
          description: 'vclinkertool_manifestfile_allowisolation',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 5,
            ja: 90,
          },
        },
        enableuac: {
          description: 'vclinkertool_manifestfile_enableuac',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 22,
            ja: 62,
          },
        },
        uacexecutionlevel: {
          description: 'vclinkertool_manifestfile_uacexecutionlevel',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 84,
            ja: 11,
          },
        },
        uacuiaccess: {
          description: 'vclinkertool_manifestfile_uacuiaccess',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 83,
            ja: 10,
          },
        },
      },
    },
    vclinkertool_debug: {
      button_index: {
        default: 21,
      },
      page_height: 509,
      category: 'VCLinkerTool',
      descriptions: {
        generatedebuginformation: {
          description: 'vclinkertool_debug_generatedebuginformation',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 29,
            ja: 41,
          },
        },
        programdatabasefile: {
          description: 'vclinkertool_debug_programdatabasefile',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 32,
            ja: 49,
          },
        },
        stripprivatesymbols: {
          description: 'vclinkertool_debug_stripprivatesymbols',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 72,
            ja: 48,
          },
        },
        generatemapfile: {
          description: 'vclinkertool_debug_generatemapfile',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 31,
            ja: 55,
          },
        },
        mapfilename: {
          description: 'vclinkertool_debug_mapfilename',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 49,
            ja: 56,
          },
        },
        mapexports: {
          description: 'vclinkertool_debug_mapexports',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 48,
            ja: 54,
          },
        },
        assemblydebug: {
          description: 'vclinkertool_debug_assemblydebug',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 13,
            ja: 40,
          },
        },
      },
    },
    vclinkertool_system: {
      button_index: {
        default: 22,
      },
      page_height: 509,
      category: 'VCLinkerTool',
      descriptions: {
        subsystem: {
          description: 'vclinkertool_system_subsystem',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 73,
            ja: 28,
          },
        },
        heapreservesize: {
          description: 'vclinkertool_system_heapreservesize',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 35,
            ja: 46,
          },
        },
        heapcommitsize: {
          description: 'vclinkertool_system_heapcommitsize',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 34,
            ja: 45,
          },
        },
        stackreservesize: {
          description: 'vclinkertool_system_stackreservesize',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 71,
            ja: 31,
          },
        },
        stackcommitsize: {
          description: 'vclinkertool_system_stackcommitsize',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 70,
            ja: 30,
          },
        },
        largeaddressaware: {
          description: 'vclinkertool_system_largeaddressaware',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 21,
            ja: 79,
          },
        },
        terminalserveraware: {
          description: 'vclinkertool_system_terminalserveraware',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 78,
            ja: 36,
          },
        },
        swaprunfromcd: {
          description: 'vclinkertool_system_swaprunfromcd',
          button_index: {
            default: 8,
          },
          alloptions_button_index: {
            en: 75,
            ja: 0,
          },
        },
        swaprunfromnet: {
          description: 'vclinkertool_system_swaprunfromnet',
          button_index: {
            default: 9,
          },
          alloptions_button_index: {
            en: 76,
            ja: 43,
          },
        },
        driver: {
          description: 'vclinkertool_system_driver',
          button_index: {
            default: 10,
          },
          alloptions_button_index: {
            en: 17,
            ja: 42,
          },
        },
      },
    },
    vclinkertool_optimization: {
      button_index: {
        default: 23,
      },
      page_height: 509,
      category: 'VCLinkerTool',
      descriptions: {
        optimizereferences: {
          description: 'vclinkertool_optimization_optimizereferences',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 64,
            ja: 74,
          },
        },
        enablecomdatfolding: {
          description: 'vclinkertool_optimization_enablecomdatfolding',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 19,
            ja: 4,
          },
        },
        functionorder: {
          description: 'vclinkertool_optimization_functionorder',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 28,
            ja: 71,
          },
        },
        profileguideddatabase: {
          description: 'vclinkertool_optimization_profileguideddatabase',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 62,
            ja: 25,
          },
        },
        linktimecodegeneration: {
          description: 'vclinkertool_optimization_linktimecodegeneration',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 46,
            ja: 69,
          },
        },
      },
    },
    vclinkertool_embeddedidl: {
      button_index: {
        default: 24,
      },
      page_height: 509,
      category: 'VCLinkerTool',
      descriptions: {
        midlcommandfile: {
          description: 'vclinkertool_embeddedidl_midlcommandfile',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 52,
            ja: 7,
          },
        },
        ignoreembeddedidl: {
          description: 'vclinkertool_embeddedidl_ignoreembeddedidl',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 37,
            ja: 91,
          },
        },
        mergedidlbasefilename: {
          description: 'vclinkertool_embeddedidl_mergedidlbasefilename',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 51,
            ja: 53,
          },
        },
        typelibraryfile: {
          description: 'vclinkertool_embeddedidl_typelibraryfile',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 81,
            ja: 37,
          },
        },
        typelibraryresourceid: {
          description: 'vclinkertool_embeddedidl_typelibraryresourceid',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 82,
            ja: 9,
          },
        },
      },
    },
    vclinkertool_advanced: {
      button_index: {
        default: 26,
      },
      page_height: 526,
      category: 'VCLinkerTool',
      descriptions: {
        entrypointsymbol: {
          description: 'vclinkertool_advanced_entrypointsymbol',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 23,
            ja: 23,
          },
        },
        setchecksum: {
          description: 'vclinkertool_advanced_setchecksum',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 67,
            ja: 38,
          },
        },
        baseaddress: {
          description: 'vclinkertool_advanced_baseaddress',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 7,
            ja: 51,
          },
        },
        randomizedbaseaddress: {
          description: 'vclinkertool_advanced_randomizedbaseaddress',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 63,
            ja: 66,
          },
        },
        fixedbaseaddress: {
          description: 'vclinkertool_advanced_fixedbaseaddress',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 25,
            ja: 72,
          },
        },
        dataexecutionprevention: {
          description: 'vclinkertool_advanced_dataexecutionprevention',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 12,
            ja: 39,
          },
        },
        turnoffassemblygeneration: {
          description: 'vclinkertool_advanced_turnoffassemblygeneration',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 80,
            ja: 18,
          },
        },
        supportunloadofdelayloadeddll: {
          description: 'vclinkertool_advanced_supportunloadofdelayloadeddll',
          button_index: {
            default: 8,
          },
          alloptions_button_index: {
            en: 85,
            ja: 82,
          },
        },
        importlibrary: {
          description: 'vclinkertool_advanced_importlibrary',
          button_index: {
            default: 10,
          },
          alloptions_button_index: {
            en: 41,
            ja: 20,
          },
        },
        mergesections: {
          description: 'vclinkertool_advanced_mergesections',
          button_index: {
            default: 11,
          },
          alloptions_button_index: {
            en: 50,
            ja: 34,
          },
        },
        targetmachine: {
          description: 'vclinkertool_advanced_targetmachine',
          button_index: {
            default: 12,
          },
          alloptions_button_index: {
            en: 77,
            ja: 78,
          },
        },
        profile: {
          description: 'vclinkertool_advanced_profile',
          button_index: {
            default: 13,
          },
          alloptions_button_index: {
            en: 61,
            ja: 50,
          },
        },
        clrthreadattribute: {
          description: 'vclinkertool_advanced_clrthreadattribute',
          button_index: {
            default: 14,
          },
          alloptions_button_index: {
            en: 9,
            ja: 3,
          },
        },
        clrimagetype: {
          description: 'vclinkertool_advanced_clrimagetype',
          button_index: {
            default: 15,
          },
          alloptions_button_index: {
            en: 8,
            ja: 2,
          },
        },
        keycontainer: {
          description: 'vclinkertool_advanced_keycontainer',
          button_index: {
            default: 17,
          },
          alloptions_button_index: {
            en: 42,
            ja: 26,
          },
        },
        clrunmanagedcodecheck: {
          description: 'vclinkertool_advanced_clrunmanagedcodecheck',
          button_index: {
            default: 19,
          },
          alloptions_button_index: {
            en: 10,
            ja: 1,
          },
        },
        errorreporting: {
          description: 'vclinkertool_advanced_errorreporting',
          button_index: {
            default: 21,
          },
          alloptions_button_index: {
            en: 24,
            ja: 22,
          },
        },
      },
    },
    vclinkertool_alloptions: {
      button_index: {
        default: 27,
      },
      page_height: 1945,
      descriptions: {
      },
    },
    vclibrariantool_general: {
      button_index: {
        default: 30,
      },
      page_height: 509,
      category: 'VCLibrarianTool',
      descriptions: {
        outputfile: {
          description: 'vclibrariantool_general_outputfile',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 13,
            ja: 12,
          },
        },
        additional_dependencies: {
          description: 'vclibrariantool_general_additional_dependencies',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 0,
            ja: 18,
          },
        },
        additional_library_directories: {
          description: 'vclibrariantool_general_additional_library_directories',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 1,
            ja: 17,
          },
        },
        suppressstartupbanner: {
          description: 'vclibrariantool_general_suppressstartupbanner',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 16,
            ja: 15,
          },
        },
        moduledefinitionfile: {
          description: 'vclinkertool_input_moduledefinitionfile',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 11,
            ja: 7,
          },
        },
        ignorealldefaultlibraries: {
          description: 'vclinkertool_input_ignorealldefaultlibraries',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 6,
            ja: 6,
          },
        },
        ignore_specific_default_libraries: {
          description: 'vclibrariantool_general_ignore_specific_default_libraries',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 7,
            ja: 19,
          },
        },
        export_named_functions: {
          description: 'vclibrariantool_general_export_named_functions',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 4,
            ja: 10,
          },
        },
        forcesymbolreferences: {
          description: 'vclinkertool_input_forcesymbolreferences',
          button_index: {
            default: 8,
          },
          alloptions_button_index: {
            en: 5,
            ja: 5,
          },
        },
        use_unicode_response_files: {
          description: 'vclibrariantool_general_use_unicode_response_files',
          button_index: {
            default: 9,
          },
          alloptions_button_index: {
            en: 19,
            ja: 1,
          },
        },
        linklibrarydependencies: {
          description: 'vclinkertool_general_linklibrarydependencies',
          button_index: {
            default: 10,
          },
          alloptions_button_index: {
            en: 8,
            ja: 8,
          },
        },
        targetmachine: {
          description: 'vclinkertool_advanced_targetmachine',
          button_index: {
            default: 13,
          },
          alloptions_button_index: {
            en: 17,
            ja: 14,
          },
        },
      },
    },
    vclibrariantool_alloptions: {
      button_index: {
        default: 31,
      },
      page_height: 509,
      descriptions: {
      },
    },
    vcmanifesttool_general: {
      button_index: {
        default: 34,
      },
      page_height: 509,
      category: 'VCManifestTool',
      descriptions: {
        assemblyidentity: {
          description: 'vcmanifesttool_general_assemblyidentity',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            default: 2,
          },
        },
        suppressstartupbanner: {
          description: 'vcmanifesttool_general_suppressstartupbanner',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 15,
            ja: 15,
          },
        },
        verboseoutput: {
          description: 'vcmanifesttool_general_verboseoutput',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 19,
            ja: 13,
          },
        },
      },
    },
    vcmanifesttool_inputandoutput: {
      button_index: {
        default: 35,
      },
      page_height: 509,
      category: 'VCManifestTool',
      descriptions: {
        additionalmanifestfiles: {
          description: 'vcmanifesttool_inputandoutput_additionalmanifestfiles',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 0,
            ja: 17,
          },
        },
        generatecatalogfiles: {
          description: 'vcmanifesttool_inputandoutput_generatecatalogfiles',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 6,
            ja: 4,
          },
        },
        inputresourcemanifests: {
          description: 'vcmanifesttool_inputandoutput_inputresourcemanifests',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 9,
            ja: 18,
          },
        },
        manifestresourcefile: {
          description: 'vcmanifesttool_inputandoutput_manifestresourcefile',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 10,
            ja: 9,
          },
        },
        outputmanifestfile: {
          description: 'vcmanifesttool_inputandoutput_outputmanifestfile',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 11,
            ja: 12,
          },
        },
      },
    },
    vcmanifesttool_isolatedcom: {
      button_index: {
        default: 36,
      },
      page_height: 509,
      category: 'VCManifestTool',
      descriptions: {
        additionalmanifestfiles: {
          description: 'vcmanifesttool_isolatedcom_componentfilename',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 3,
            ja: 5,
          },
        },
        registrarscriptfile: {
          description: 'vcmanifesttool_isolatedcom_registrarscriptfile',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 12,
            ja: 10,
          },
        },
        replacementsfile: {
          description: 'vcmanifesttool_isolatedcom_replacementsfile',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 13,
            ja: 14,
          },
        },
        typelibraryfile: {
          description: 'vcmanifesttool_isolatedcom_typelibraryfile',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 16,
            ja: 6,
          },
        },
      },
    },
    vcmanifesttool_advanced: {
      button_index: {
        default: 37,
      },
      page_height: 509,
      category: 'VCManifestTool',
      descriptions: {
        updatefilehashes: {
          description: 'vcmanifesttool_advanced_updatefilehashes',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 17,
            ja: 7,
          },
        },
        updatefilehashessearchpath: {
          description: 'vcmanifesttool_advanced_updatefilehashessearchpath',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 18,
            ja: 8,
          },
        },
      },
    },
    vcmanifesttool_alloptions: {
      button_index: {
        default: 38,
      },
      page_height: 509,
      descriptions: {
      },
    },
    vcresourcecompilertool_general: {
      button_index: {
        default: 41,
      },
      page_height: 509,
      category: 'VCResourceCompilerTool',
      descriptions: {
        additionalincludedirectories: {
          description: 'vcresourcecompilertool_general_additionalincludedirectories',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 0,
            ja: 8,
          },
        },
        culture: {
          description: 'vcresourcecompilertool_general_culture',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 2,
            ja: 1,
          },
        },
        ignorestandardincludepath: {
          description: 'vcresourcecompilertool_general_ignorestandardincludepath',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 3,
            ja: 9,
          },
        },
        preprocessordefinitions: {
          description: 'vcresourcecompilertool_general_preprocessordefinitions',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 5,
            ja: 2,
          },
        },
        resourceoutputfilename: {
          description: 'vcresourcecompilertool_general_resourceoutputfilename',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 6,
            ja: 4,
          }
        },
        showprogress: {
          description: 'vcresourcecompilertool_general_showprogress',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 7,
            ja: 5,
          },
        },
        suppressstartupbanner: {
          description: 'vcresourcecompilertool_general_suppressstartupbanner',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 8,
            ja: 6,
          },
        },
        undefinepreprocessordefinitions: {
          description: 'vcresourcecompilertool_general_undefinepreprocessordefinitions',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 9,
            ja: 3,
          },
        },
      },
    },
    vcresourcecompilertool_alloptions: {
      button_index: {
        default: 42,
      },
      page_height: 509,
      descriptions: {
        additionaloptions: {
          description: 'vcresourcecompilertool_alloptions_additionaloptions',
          button_index: {
            en: 1,
            ja: 7,
          },
        },
      },
    },
    vcmidltool_general: {
      button_index: {
        default: 45,
      },
      page_height: 509,
      category: 'VCMIDLTool',
      descriptions: {
        additionalincludedirectories: {
          description: 'vcmidltool_general_additionalincludedirectories',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 0,
            ja: 37,
          },
        },
        defaultchartype: {
          description: 'vcmidltool_general_defaultchartype',
          button_index: {
            default: 9,
          },
          alloptions_button_index: {
            en: 4,
            ja: 1,
          },
        },
        generatestublessproxies: {
          description: 'vcmidltool_general_generatestublessproxies',
          button_index: {
            default: 11,
          },
          alloptions_button_index: {
            en: 17,
            ja: 16,
          },
        },
        ignorestandardincludepath: {
          description: 'vcmidltool_general_ignorestandardincludepath',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 20,
            ja: 40,
          },
        },
        mktyplibcompatible: {
          description: 'vcmidltool_general_mktyplibcompatible',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 24,
            ja: 6,
          },
        },
        preprocessordefinitions: {
          description: 'vcmidltool_general_preprocessordefinitions',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 27,
            ja: 22,
          },
        },
        suppressstartupbanner: {
          description: 'vcmidltool_general_suppressstartupbanner',
          button_index: {
            default: 8,
          },
          alloptions_button_index: {
            en: 33,
            ja: 35,
          },
        },
        targetenvironment: {
          description: 'vcmidltool_general_targetenvironment',
          button_index: {
            default: 10,
          },
          alloptions_button_index: {
            en: 34,
            ja: 17,
          },
        },
        warnaserror: {
          description: 'vcmidltool_general_warnaserror',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 35,
            ja: 29,
          },
        },
        warninglevel: {
          description: 'vcmidltool_general_warninglevel',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 40,
            ja: 28,
          },
        },
      },
    },
    vcmidltool_output: {
      button_index: {
        default: 46,
      },
      page_height: 509,
      category: 'VCMIDLTool',
      descriptions: {
        dlldatafilename: {
          description: 'vcmidltool_output_dlldatafilename',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 12,
            ja: 3,
          },
        },
        generatetypelibrary: {
          description: 'vcmidltool_output_generatetypelibrary',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 18,
            ja: 20,
          },
        },
        headerfilename: {
          description: 'vcmidltool_output_headerfilename',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 19,
            ja: 24,
          }
        },
        interfaceidentifierfilename: {
          description: 'vcmidltool_output_interfaceidentifierfilename',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 21,
            ja: 5,
          },
        },
        outputdirectory: {
          description: 'vcmidltool_output_outputdirectory',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            en: 25,
            ja: 33,
          },
        },
        proxyfilename: {
          description: 'vcmidltool_output_proxyfilename',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 28,
            ja: 23,
          },
        },
        typelibraryname: {
          description: 'vcmidltool_output_typelibraryname',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 36,
            ja: 18,
          },
        },
      },
    },
    vcmidltool_advanced: {
      button_index: {
        default: 47,
      },
      page_height: 509,
      category: 'VCMIDLTool',
      descriptions: {
        cpreprocessoptions: {
          description: 'vcmidltool_advanced_cpreprocessoptions',
          button_index: {
            default: 0,
          },
          alloptions_button_index: {
            ja: 2,
            en: 5,
          },
        },
        enableerrorchecks: {
          description: 'vcmidltool_advanced_enableerrorchecks',
          button_index: {
            default: 2,
          },
          alloptions_button_index: {
            en: 13,
            ja: 9,
          },
        },
        errorcheckallocations: {
          description: 'vcmidltool_advanced_errorcheckallocations',
          button_index: {
            default: 3,
          },
          alloptions_button_index: {
            en: 6,
            ja: 26,
          },
        },
        errorcheckbounds: {
          description: 'vcmidltool_advanced_errorcheckbounds',
          button_index: {
            default: 4,
          },
          alloptions_button_index: {
            en: 7,
            ja: 39,
          },
        },
        errorcheckenumrange: {
          description: 'vcmidltool_advanced_errorcheckenumrange',
          button_index: {
            default: 5,
          },
          alloptions_button_index: {
            en: 8,
            ja: 4,
          },
        },
        errorcheckrefpointers: {
          description: 'vcmidltool_advanced_errorcheckrefpointers',
          button_index: {
            default: 6,
          },
          alloptions_button_index: {
            en: 9,
            ja: 31,
          },
        },
        errorcheckstubdata: {
          description: 'vcmidltool_advanced_errorcheckstubdata',
          button_index: {
            default: 7,
          },
          alloptions_button_index: {
            en: 10,
            ja: 15,
          },
        },
        redirectoutputanderrors: {
          description: 'vcmidltool_advanced_redirectoutputanderrors',
          button_index: {
            default: 11,
          },
          alloptions_button_index: {
            en: 29,
            ja: 34,
          },
        },
        structmemberalignment: {
          description: 'vcmidltool_advanced_structmemberalignment',
          button_index: {
            default: 10,
          },
          alloptions_button_index: {
            en: 31,
            ja: 30,
          },
        },
        undefinepreprocessordefinitions: {
          description: 'vcmidltool_advanced_undefinepreprocessordefinitions',
          button_index: {
            default: 1,
          },
          alloptions_button_index: {
            en: 38,
            ja: 32,
          },
        },
        validateparameters: {
          description: 'vcmidltool_advanced_validateparameters',
          button_index: {
            default: 9,
          },
          alloptions_button_index: {
            en: 39,
            ja: 21,
          },
        }
      },
    },
    vcmidltool_alloptions: {
      button_index: {
        default: 48,
      },
      page_height: 874,
      descriptions: {
        additionaloptions: {
          description: 'vcmidltool_alloptions_additionaloptions',
          button_index: {
            en: 2,
            ja: 36,
          },
        },
      },
    },
  };

  var append_alloptions_pages = function(gypcs) {
    var categories = {};

    for (var page_title in gypcs.pages) {
      var page = gypcs.pages[page_title];
      if (page.category) {
        if (!(page.category in categories)) {
          categories[page.category] = [];
        }
      }
      for (var description_title in page.descriptions) {
        if (page.category) {
          categories[page.category].push({description_title: description_title, page_title: page_title});
        }
      }
    }

    for (var category in categories) {
      var page_title = category.toLowerCase() + '_alloptions';

      var page = gypcs.pages[page_title];
      page.category = category;

      for (var i = 0; i < categories[category].length; i++) {
        var item = categories[category][i];
        var original_description_title = item.description_title;
        var original_page_title = item.page_title;

        var description = {};
        var original_description = gypcs.pages[original_page_title].descriptions[original_description_title];

        description.description = original_description.description;
        description.button_index = original_description.alloptions_button_index;

        page.descriptions[original_description_title] = description;
      }
    }
  };
  append_alloptions_pages(gypcs);

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
      var page = $button_element.attr('data-gypcs-page');
      var description = $button_element.attr('data-gypcs-description');
      var lang = gypcs.language;
      var description_element_name = gypcs.pages[page].descriptions[description].description;
      var description = gypcs.descriptions[description_element_name];
      var contents = description.text;
      var category = gypcs.pages[page].category;
      var translations = null;
      if ('translations' in description) {
        translations = description['translations'];
      } else {
        translations = {};
      }
      translations['@yes'] = { ja: 'はい', en: 'Yes' };
      translations['@no'] = { ja: 'いいえ', en: 'No' };
      var original_contents = contents;
      contents = [];
      for (var i = 0; i < original_contents.length; i++) {
        var content = original_contents[i];
        if (category) {
            content = content.replace('@category', category);
        }
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
    var $language_label = $('#language_label');
    $language_label.empty();
    $language_label.append(lang);

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
        var top = (description_button_offset + button_index * description_button_distance) * config_panel_scale;
        var height = description_button_height * config_panel_scale;
        var $desc_div = $('<div data-gypcs-page="' + name + '" data-gypcs-description="' + description_title + '" class="description_select_button" style="top: ' + top + 'px; height: ' + height + 'px"><!--' + button_index + '--></div>');
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

             // NG, ignored
             'DelaySign': 'true',

             'KeyFile': 'a_file_name',
             'OptimizeForWindows98': '1',
             'ResourceOnlyDLL': 'true',
             'UseUnicodeResponseFiles': 'true',
         },
         'VCMIDLTool': {
             },
         'VCResourceCompilerTool': {
         }

         'VCManifestTool': {
             // 反映されない
             'DependencyInformationFile': 'b_file_name',

             // 反映されない
             'UseFAT32Workaround': 'true',

              // 反映されない？
             'UseUnicodeResponseFiles': 'true',
             }},
*/
