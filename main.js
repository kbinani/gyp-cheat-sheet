$(document).ready(function() {
  var gypcs = {
    language: 'ja',
    pages: {
      general: {
        button_index: {
          ja: 2
        },
        page_height: 509,
        descriptions: {
          type: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    # アプリケーション (.exe)\n" + 
                "    'type':  'executable',\n" + 
                "\n" + 
                "    # ダイナミック ライブラリ (.dll)\n" + 
                "    'type': 'loadable_module',\n" + 
                "\n" + 
                "    # ダイナミック ライブラリ (.dll)\n" + 
                "    'type': 'shared_library',\n" + 
                "\n" + 
                "    # スタティック ライブラリ (.lib)\n" + 
                "    'type': 'static_library',\n" + 
                "\n" + 
                "    # ユーティリティ\n" + 
                "    'type': 'none',\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          characterset: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_configuration_attributes': {\n" + 
                "      # Use Unicode Character Set\n" + 
                "      'CharacterSet': '1',\n" + 
                "\n" + 
                "      # Use Multi-Byte Character Set\n" + 
                "      'CharacterSet': '2',\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
          toolset: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    # Visual Studio 2012\n" + 
                "    'msbuild_toolset': 'v110',\n" + 
                "\n" + 
                "    # Visual Studio 2012 - Windows XP\n" + 
                "    'msbuild_toolset': 'v110_xp',\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 15,
            },
            button_height: 1,
          },
          targetname: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'product_name': 'MyProduct'\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 11,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_general: {
        button_index: {
          ja: 7
        },
        page_height: 509,
        descriptions: {
          includedir: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'include_dirs': [\n" + 
                "      'C:\SomeLibrary\include'\n" + 
                "    ]\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          additionalusingdirectories: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          debuginformationformat: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # C7 compatible (/Z7)\n" + 
                "        'DebugInformationFormat': '1'\n" + 
                "\n" + 
                "        # Program Database (/Zi)\n" + 
                "        'DebugInformationFormat': '3'\n" + 
                "\n" + 
                "        # Program Database for Edit And Continue (/ZI)\n" + 
                "        'DebugInformationFormat': '4'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          suppressstartupbanner: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/nologo)\n" + 
                "        'SuppressStartupBanner': 'true',\n" + 
                "\n" + 
                "        # いいえ (/nologo-)\n" + 
                "        'SuppressStartupBanner': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 5,
            },
            button_height: 1,
          },
          warninglevel: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # すべての警告を非表示にする (/W0)\n" + 
                "        'WarningLevel': '0',\n" + 
                "\n" + 
                "        # レベル 1 (/W1)\n" + 
                "        'WarningLevel': '1',\n" + 
                "\n" + 
                "        # レベル 2 (/W2)\n" + 
                "        'WarningLevel': '2',\n" + 
                "\n" + 
                "        # レベル 3 (/W3)\n" + 
                "        'WarningLevel': '3',\n" + 
                "\n" + 
                "        # レベル 4 (/W4)\n" + 
                "        'WarningLevel': '4',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
          warnaserror: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/WX)\n" + 
                "        'WarnAsError': 'true',\n" + 
                "\n" + 
                "        # いいえ (/WX-)\n" + 
                "        'WarnAsError': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 7,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_optimization: {
        button_index: {
          ja: 8
        },
        page_height: 509,
        descriptions: {
          optimization: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # 無効 (/Od)\n" + 
                "        'Optimization': '0'\n" + 
                "\n" + 
                "        # サイズの最小化 (/O1)\n" + 
                "        'Optimization': '1'\n" + 
                "\n" + 
                "        # 実行速度の最小化 (/O2)\n" + 
                "        'Optimization': '2'\n" + 
                "\n" + 
                "        # 最大限の最適化 (/Ox)\n" + 
                "        'Optimization': '3'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          inlinefunctionexpansion: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # 既定\n" + 
                "        'InlineFunctionExpansion': '0'\n" + 
                "\n" + 
                "        # __inline のみ (/Ob1)\n" + 
                "        'InlineFunctionExpansion': '1'\n" + 
                "\n" + 
                "        # 拡張可能な関数すべて (/Ob2)\n" + 
                "        'InlineFunctionExpansion': '2'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          enableintrinsicfunctions: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/Oi)\n" + 
                "        'EnableIntrinsicFunctions': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'EnableIntrinsicFunctions': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          favorsizeorspeed: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # なし\n" + 
                "        'FavorSizeOrSpeed': '0',\n" + 
                "\n" + 
                "        # 実行速度を優先 (/Ot)\n" + 
                "        'FavorSizeOrSpeed': '1',\n" + 
                "\n" + 
                "        # 実行可能ファイルのサイズを優先 (/Os)\n" + 
                "        'FavorSizeOrSpeed': '2',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          omitframepointers: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/Oy)\n" + 
                "        'OmitFramePointers': 'true'\n" + 
                "\n" + 
                "        # いいえ (/Oy-)\n" + 
                "        'OmitFramePointers': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
          enablefibersafeoptimizations: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/GT)\n" + 
                "        'EnableFiberSafeOptimizations': 'true'\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'EnableFiberSafeOptimizations': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 5,
            },
            button_height: 1,
          },
          wholeprogramoptimization: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/GL)\n" + 
                "        'WholeProgramOptimization': 'true'\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'WholeProgramOptimization': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_preprocessor: {
        button_index: {
          ja: 9
        },
        page_height: 509,
        descriptions: {
          defines: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'defines': [\n" + 
                "        'FOO',\n" + 
                "        'BAR'\n" + 
                "    ],\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          ignorestandardincludepath: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/X)\n" + 
                "        'IgnoreStandardIncludePath': 'true'\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'IgnoreStandardIncludePath': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          undefineallpreprocessordefinitions: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/u)\n" + 
                "        'UndefineAllPreprocessorDefinitions': 'true'\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'UndefineAllPreprocessorDefinitions': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          generatepreprocessedfile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # ファイルの前処理: いいえ\n" + 
                "        # 行番号の前処理の抑制: いいえ\n" + 
                "        'GeneratePreprocessedFile': '0',\n" + 
                "\n" + 
                "        # ファイルの前処理: はい (/P)\n" + 
                "        # 行番号の前処理の抑制: いいえ\n" + 
                "        'GeneratePreprocessedFile': '1',\n" + 
                "\n" + 
                "        # ファイルの前処理: はい (/P)\n" + 
                "        # 行番号の前処理の抑制: はい (/EP)\n" + 
                "        'GeneratePreprocessedFile': '2',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 2,
          },
          undefinepreprocessordefinitions: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          keepcomments: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/C)\n" + 
                "        'KeepComments': 'true'\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'KeepComments': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_codegeneration: {
        button_index: {
          ja: 10
        },
        page_height: 509,
        descriptions: {
          stringpooling: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/GF)\n" + 
                "        'StringPooling': 'true'\n" + 
                "\n" + 
                "        # いいえ (/GF-)\n" + 
                "        'StringPooling': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          minimalrebuild: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/Gm)\n" + 
                "        'MinimalRebuild': 'true'\n" + 
                "\n" + 
                "        # いいえ (/Gm-)\n" + 
                "        'MinimalRebuild': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          exceptionhandling: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # いいえ\n" + 
                "        'ExceptionHandling': '0'\n" + 
                "\n" + 
                "        # はい (/EHsc)\n" + 
                "        'ExceptionHandling': '1'\n" + 
                "\n" + 
                "        # はい - SEH の例外あり (/EHa)\n" + 
                "        'ExceptionHandling': '2'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          smallertypecheck: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/RTCc)\n" + 
                "        'SmallerTypeCheck': 'true'\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'SmallerTypeCheck': 'false'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          basicruntimechecks: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # 既定\n" + 
                "        'BasicRuntimeChecks': '0'\n" + 
                "\n" + 
                "        # スタック フレーム (/RTCs)\n" + 
                "        'BasicRuntimeChecks': '1'\n" + 
                "\n" + 
                "        # 初期化されていない変数 (/RTCu)\n" + 
                "        'BasicRuntimeChecks': '2'\n" + 
                "\n" + 
                "        # 両方 (/RTC1、/RTCsu と同等) (/RTC1)\n" + 
                "        'BasicRuntimeChecks': '3'\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
          runtimelibrary: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'configurations': {\n" + 
                "      'Debug': {\n" + 
                "        'msvs_settings': {\n" + 
                "          'VCCLCompilerTool': {\n" + 
                "            # マルチスレッド (/MT)\n" + 
                "            'RuntimeLibrary': '0',\n" + 
                "\n" + 
                "            # マルチスレッド デバッグ (/MTd)\n" + 
                "            'RuntimeLibrary': '1',\n" + 
                "\n" + 
                "            # マルチスレッド DLL (/MD)\n" + 
                "            'RuntimeLibrary': '2',\n" + 
                "\n" + 
                "            # マルチスレッド デバッグ DLL (/MDd)\n" + 
                "            'RuntimeLibrary': '3',\n" + 
                "          }\n" + 
                "        }\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 5,
            },
            button_height: 1,
          },
          structmemberalignment: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # 既定\n" + 
                "        'StructMemberAlignment': '0',\n" + 
                "\n" + 
                "        # 1 バイト (/Zp1)\n" + 
                "        'StructMemberAlignment': '1',\n" + 
                "\n" + 
                "        # 2 バイト (/Zp2)\n" + 
                "        'StructMemberAlignment': '2',\n" + 
                "\n" + 
                "        # 4 バイト (/Zp4)\n" + 
                "        'StructMemberAlignment': '3',\n" + 
                "\n" + 
                "        # 8 バイト (/Zp8)\n" + 
                "        'StructMemberAlignment': '4',\n" + 
                "\n" + 
                "        # 16 バイト (/Zp16)\n" + 
                "        'StructMemberAlignment': '5',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
          buffersecuritycheck: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/GS)\n" + 
                "        'BufferSecurityCheck': 'true',\n" + 
                "\n" + 
                "        # いいえ (/GS-)\n" + 
                "        'BufferSecurityCheck': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 7,
            },
            button_height: 1,
          },
          enablefunctionlevellinking: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/Gy)\n" + 
                "        'EnableFunctionLevelLinking': 'true',\n" + 
                "\n" + 
                "        # いいえ (/Gy-)\n" + 
                "        'EnableFunctionLevelLinking': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 8,
            },
            button_height: 1,
          },
          enableenhancedinstructionset: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # 設定なし\n" + 
                "        'EnableEnhancedInstructionSet': '0',\n" + 
                "\n" + 
                "        # ストリーミング SIMD 拡張機能 (/arch:SSE)\n" + 
                "        'EnableEnhancedInstructionSet': '1',\n" + 
                "\n" + 
                "        # ストリーミング SIMD 拡張機能 2 (/arch:SSE2)\n" + 
                "        'EnableEnhancedInstructionSet': '2',\n" + 
                "\n" + 
                "        # Advanced Vector Extensions (/arch:AVX)\n" + 
                "        'EnableEnhancedInstructionSet': '3',\n" + 
                "\n" + 
                "        # 拡張命令なし (/arch:IA32)\n" + 
                "        'EnableEnhancedInstructionSet': '4',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 10,
            },
            button_height: 1,
          },
          floatingpointmodel: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 11,
            },
            button_height: 1,
          },
          floatingpointexceptions: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/fp:except)\n" + 
                "        'FloatingPointExceptions': 'true',\n" + 
                "\n" + 
                "        # いいえ (/fp:except-)\n" + 
                "        'FloatingPointExceptions': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 12,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_language: {
        button_index: {
          ja: 11
        },
        page_height: 509,
        descriptions: {
          disablelanguageextensions: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/Za)\n" + 
                "        'DisableLanguageExtensions': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'DisableLanguageExtensions': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          treatwchartasbuiltintype: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/Zc:wchar_t)\n" + 
                "        'TreatWChar_tAsBuiltInType': 'true',\n" + 
                "\n" + 
                "        # いいえ (/Zc:wchar_t-)\n" + 
                "        'TreatWChar_tAsBuiltInType': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          forceconformanceinforloopscope: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/Zc:forScope)\n" + 
                "        'ForceConformanceInForLoopScope': 'true',\n" + 
                "\n" + 
                "        # いいえ (/Zc:forScope-)\n" + 
                "        'ForceConformanceInForLoopScope': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          runtimetypeinfo: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/GR)\n" + 
                "        'RuntimeTypeInfo': 'true',\n" + 
                "\n" + 
                "        # いいえ (/GR-)\n" + 
                "        'RuntimeTypeInfo': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          openmp: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/openmp)\n" + 
                "        'OpenMP': 'true',\n" + 
                "\n" + 
                "        # いいえ (/openmp-)\n" + 
                "        'OpenMP': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_precompiledheader: {
        button_index: {
          ja: 12
        },
        page_height: 509,
        descriptions: {
          useprecompiledheader: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # プリコンパイル済みヘッダーを使用しない\n" + 
                "        'UsePrecompiledHeader': '0',\n" + 
                "\n" + 
                "        # 作成 (/Yc)\n" + 
                "        'UsePrecompiledHeader': '1',\n" + 
                "\n" + 
                "        # 使用 (/Yu)\n" + 
                "        'UsePrecompiledHeader': '2',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
                "'targets': [\n" + 
                "  {\n" + 
                "    # stdafx.cpp について、\"作成 (/Yc)\"\n" + 
                "    'msvs_precompiled_source': 'stdafx.cpp',\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          precompiledheaderthrough: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'PrecompiledHeaderThrough': 'stdafx.h',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          precompiledheaderfile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'PrecompiledHeaderFile': '$(IntDir)$(TargetName).pch',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_output: {
        button_index: {
          ja: 13
        },
        page_height: 509,
        descriptions: {
          expandattributedsource: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/Fx)\n" + 
                "        'ExpandAttributedSource': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'ExpandAttributedSource': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          assembleroutput: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # なし\n" + 
                "        'AssemblerOutput': '0',\n" + 
                "\n" + 
                "        # アセンブリ コードのみ (/FA)\n" + 
                "        'AssemblerOutput': '1',\n" + 
                "\n" + 
                "        # アセンブリ コード、コンピューター語コード、ソース コード (/FAcs)\n" + 
                "        'AssemblerOutput': '2',\n" + 
                "\n" + 
                "        # アセンブリ コードとコンピューター語コード (/FAc)\n" + 
                "        'AssemblerOutput': '3',\n" + 
                "\n" + 
                "        # アセンブリ コードとソース コード (/FAs)\n" + 
                "        'AssemblerOutput': '4',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          assemblerlistinglocation: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'AssemblerListingLocation': '$(IntDir)',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          objectfile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'ObjectFile': '$(IntDir)',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
          programdatabasefilename: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'ProgramDataBaseFileName': '$(IntDir)vc$(PlatformToolsetVersion).pdb',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 5,
            },
            button_height: 1,
          },
          generatexmldocumentationfiles: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/doc)\n" + 
                "        'GenerateXMLDocumentationFiles': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'GenerateXMLDocumentationFiles': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
          xmldocumentationfilename: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'XMLDocumentationFileName': '$(IntDir)',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 7,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_browserinformation: {
        button_index: {
          ja: 14
        },
        page_height: 509,
        descriptions: {
          browseinformation: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # いいえ\n" + 
                "        'BrowseInformation': '0',\n" + 
                "\n" + 
                "        # はい (/FR)\n" + 
                "        'BrowseInformation': '1',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          browseinformationfile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        'BrowseInformationFile': '$(IntDir)',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
        },
      },
      vccompilertools_details: {
        button_index: {
          ja: 15
        },
        page_height: 509,
        descriptions: {
          disablespecificwarnings: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          callingconversion: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          compileas: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # 既定\n" + 
                "        'CompileAs': '0',\n" + 
                "\n" + 
                "        # C コードとしてコンパイル (/TC)\n" + 
                "        'CompileAs': '1',\n" + 
                "\n" + 
                "        # C++ コードとしてコンパイル (/TP)\n" + 
                "        'CompileAs': '2',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          forcedincludefiles: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          forcedusingfiles: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
          vcclcompilertool: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/showIncludes)\n" + 
                "        'ShowIncludes': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'ShowIncludes': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 5,
            },
            button_height: 1,
          },
          usefullpaths: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/FC)\n" + 
                "        'UseFullPaths': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'UseFullPaths': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
          omitdefaultlibname: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # はい (/Zl)\n" + 
                "        'OmitDefaultLibName': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'OmitDefaultLibName': 'false',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 7,
            },
            button_height: 1,
          },
          errorreporting: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCCLCompilerTool': {\n" + 
                "        # レポートを送信しない (/errorReport:none)\n" + 
                "        'ErrorReporting': '0',\n" + 
                "\n" + 
                "        # すぐにメッセージを表示 (/errorReport:prompt)\n" + 
                "        'ErrorReporting': '1',\n" + 
                "\n" + 
                "        # 次回ログインのためのキュー (/errorReport:queue)\n" + 
                "        'ErrorReporting': '2',\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 8,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_general: {
        button_index: {
          ja: 19
        },
        page_height: 509,
        descriptions: {
          outputfile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'OutputFile': '$(OutDir)$(TargetName)$(TargetExt)',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          showprogress: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # 設定なし\n" + 
                "        'ShowProgress': '0',\n" + 
                "\n" + 
                "        # 詳細情報をすべて表示 (/VERBOSE)\n" + 
                "        'ShowProgress': '1',\n" + 
                "\n" + 
                "        # 検索したライブラリ (/VERBOSE:Lib)\n" + 
                "        'ShowProgress': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          version: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'Version': '3.14159',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          linkincremental: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # いいえ (/INCREMENTAL:NO)\n" + 
                "        'LinkIncremental': '1',\n" + 
                "\n" + 
                "        # はい (/INCREMENTAL)\n" + 
                "        'LinkIncremental': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          suppressstartupbanner: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/NOLOGO)\n" + 
                "        'SuppressStartupBanner': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'SuppressStartupBanner': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
          ignoreimportlibrary: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい\n" + 
                "        'IgnoreImportLibrary': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'IgnoreImportLibrary': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 5,
            },
            button_height: 1,
          },
          registeroutput: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい\n" + 
                "        'RegisterOutput': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'RegisterOutput': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
          peruserredirection: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい\n" + 
                "        'PerUserRedirection': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'PerUserRedirection': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 7,
            },
            button_height: 1,
          },
          additionallibrarydirectories: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'AdditionalLibraryDirectories': [\n" + 
                "          'C:\SomeLibrary\lib',\n" + 
                "        ],\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 8,
            },
            button_height: 1,
          },
          linklibrarydependencies: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい\n" + 
                "        'LinkLibraryDependencies': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'LinkLibraryDependencies': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 9,
            },
            button_height: 1,
          },
          uselibrarydependencyinputs: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい\n" + 
                "        'UseLibraryDependencyInputs': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'UseLibraryDependencyInputs': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 10,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_input: {
        button_index: {
          ja: 20
        },
        page_height: 509,
        descriptions: {
          additionaldependencies: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          ignorealldefaultlibraries: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/NODEFAULTLIB)\n" + 
                "        'IgnoreAllDefaultLibraries': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'IgnoreAllDefaultLibraries': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          ignoredefaultlibrarynames: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          moduledefinitionfile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'ModuleDefinitionFile': 'a_file_name.def',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          addmodulenamestoassembly: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
          embedmanagedresourcefile: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 5,
            },
            button_height: 1,
          },
          forcesymbolreferences: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
          delayloaddlls: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 7,
            },
            button_height: 1,
          },
          assemblylinkresource: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 8,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_manifestfile: {
        button_index: {
          ja: 21
        },
        page_height: 509,
        descriptions: {
          generatemanifest: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/MANIFEST)\n" + 
                "        'GenerateManifest': 'true',\n" + 
                "\n" + 
                "        # いいえ (/MANIFEST:NO)\n" + 
                "        'GenerateManifest': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          manifestfile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'ManifestFile': '$(IntDir)$(TargetName)$(TargetExt).intermediate.manifest',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          additionalmanifestdependencies: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          allowisolation: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい\n" + 
                "        'AllowIsolation': 'true',\n" + 
                "\n" + 
                "        # いいえ (/ALLOWISOLATION:NO)\n" + 
                "        'AllowIsolation': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          enableuac: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/MANIFESTUAC:)\n" + 
                "        'EnableUAC': 'true',\n" + 
                "\n" + 
                "        # いいえ (/MANIFESTUAC:NO)\n" + 
                "        'EnableUAC': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
          uacexecutionlevel: {
            description: {
              ja: [
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
              ]
            },
            button_index: {
              ja: 5,
            },
            button_height: 1,
          },
          uacuiaccess: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/uiAccess='true')\n" + 
                "        'UACUIAccess': 'true',\n" + 
                "\n" + 
                "        # いいえ (/uiAccess='false')\n" + 
                "        'UACUIAccess': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_debug: {
        button_index: {
          ja: 22
        },
        page_height: 509,
        descriptions: {
          generatedebuginformation: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'configurations': {\n" + 
                "      'Debug': {\n" + 
                "        'msvs_settings': {\n" + 
                "          'VCLinkerTool': {\n" + 
                "            # はい (/DEBUG)\n" + 
                "            'GenerateDebugInformation': 'true',\n" + 
                "\n" + 
                "            # いいえ\n" + 
                "            'GenerateDebugInformation': 'false',\n" + 
                "          },\n" + 
                "        }\n" + 
                "      }\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          programdatabasefile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'ProgramDatabaseFile': '$(OutDir)$(TargetName).pdb',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          stripprivatesymbols: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "       'StripPrivateSymbols': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          generatemapfile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/MAP)\n" + 
                "        'GenerateMapFile': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'GenerateMapFile': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          mapfilename: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'MapFileName': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
          mapexports: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/MAPINFO:EXPORTS)\n" + 
                "        'MapExports': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'MapExports': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 5,
            },
            button_height: 1,
          },
          assemblydebug: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/ASSEMBLYDEBUG)\n" + 
                "        'AssemblyDebug': '1',\n" + 
                "\n" + 
                "        # いいえ (/ASSEMBLYDEBUG:DISABLE)\n" + 
                "        'AssemblyDebug': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_system: {
        button_index: {
          ja: 23
        },
        page_height: 509,
        descriptions: {
          generatedebuginformation: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # 設定なし\n" + 
                "        'SubSystem': '0',\n" + 
                "\n" + 
                "        # コンソール (/SUBSYSTEM:CONSOLE)\n" + 
                "        'SubSystem': '1',\n" + 
                "\n" + 
                "        # Windows (/SUBSYSTEM:WINDOWS)\n" + 
                "        'SubSystem': '2',\n" + 
                "\n" + 
                "        # ネイティブ (/SUBSYSTEM:NATIVE)\n" + 
                "        'SubSystem': '3',\n" + 
                "\n" + 
                "        # EFI アプリケーション (/SUBSYSTEM:EFI_APPLICATION)\n" + 
                "        'SubSystem': '4',\n" + 
                "\n" + 
                "        # EFI ブート サービス ドライバー (/SUBSYSTEM:EFI_BOOT_SERVICE_DRIVER)\n" + 
                "        'SubSystem': '5',\n" + 
                "\n" + 
                "        # EFI ROM (/SUBSYSTEM:EFI_ROM)\n" + 
                "        'SubSystem': '6',\n" + 
                "\n" + 
                "        # EFI ランタイム (/SUBSYSTEM:EFI_RUNTIME_DRIVER)\n" + 
                "        'SubSystem': '7',\n" + 
                "\n" + 
                "        # WindowsCE\n" + 
                "        'SubSystem': '8',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          heapreservesize: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'HeapReserveSize': '1048576', # size in bytes\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          heapcommitsize: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'HeapCommitSize': '4096', # size in bytes\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          stackreservesize: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'StackReserveSize': '1048576',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
          stackcommitsize: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'StackCommitSize': '4096',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 5,
            },
            button_height: 1,
          },
          largeaddressaware: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # いいえ (/LARGEADDRESSAWARE:NO)\n" + 
                "        'LargeAddressAware': '1',\n" + 
                "\n" + 
                "        # はい (/LARGEADDRESSAWARE)\n" + 
                "        'LargeAddressAware': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
          terminalserveraware: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # いいえ (/TSAWARE:NO)\n" + 
                "        'TerminalServerAware': '1',\n" + 
                "\n" + 
                "        # はい (/TSAWARE)\n" + 
                "        'TerminalServerAware': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 7,
            },
            button_height: 1,
          },
          swaprunfromcd: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/SWAPRUN:CD)\n" + 
                "        'SwapRunFromCD': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'SwapRunFromCD': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 8,
            },
            button_height: 1,
          },
          swaprunfromnet: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/SWAPRUN:NET)\n" + 
                "        'SwapRunFromNet': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'SwapRunFromNet': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 9,
            },
            button_height: 1,
          },
          driver: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # 設定なし\n" + 
                "        'Driver': '0',\n" + 
                "\n" + 
                "        # ドライバー (/Driver)\n" + 
                "        'Driver': '1',\n" + 
                "\n" + 
                "        # UP のみ (/DRIVER:UPONLY)\n" + 
                "        'Driver': '2',\n" + 
                "\n" + 
                "        # WDM (/DRIVER:WDM)\n" + 
                "        'Driver': '3',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 10,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_optimization: {
        button_index: {
          ja: 24
        },
        page_height: 509,
        descriptions: {
          optimizereferences: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # いいえ (/OPT:NOREF)\n" + 
                "        'OptimizeReferences': '1',\n" + 
                "\n" + 
                "        # はい (/OPT:REF)\n" + 
                "        'OptimizeReferences': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          enablecomdatfolding: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # いいえ (/OPT:NOICF)\n" + 
                "        'EnableCOMDATFolding': '1',\n" + 
                "\n" + 
                "        # はい (/OPT:ICF)\n" + 
                "        'EnableCOMDATFolding': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          functionorder: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'FunctionOrder': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          profileguideddatabase: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'ProfileGuidedDatabase': '$(OutDir)$(TargetName).pgd',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          linktimecodegeneration: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # 既定\n" + 
                "        'LinkTimeCodeGeneration': '0',\n" + 
                "\n" + 
                "        # リンク時のコード生成を使用 (/LTCG)\n" + 
                "        'LinkTimeCodeGeneration': '1',\n" + 
                "\n" + 
                "        # ガイド付き最適化のプロファイル - インストルメント (/LTCG:PGInstrument)\n" + 
                "        'LinkTimeCodeGeneration': '2',\n" + 
                "\n" + 
                "        # ガイド付き最適化のプロファイル - 最適化 (/LTCG:PGOptimize)\n" + 
                "        'LinkTimeCodeGeneration': '3',\n" + 
                "\n" + 
                "        # ガイド付き最適化のプロファイル - 更新 (/LTCG:PGUpdate)\n" + 
                "        'LinkTimeCodeGeneration': '4',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_embeddedidl: {
        button_index: {
          ja: 25
        },
        page_height: 509,
        descriptions: {
          midlcommandfile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'MidlCommandFile': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          ignoreembeddedidl: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/IGNOREIDL)\n" + 
                "        'IgnoreEmbeddedIDL': 'true',\n" + 
                "        # いいえ\n" + 
                "        'IgnoreEmbeddedIDL': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 1,
            },
            button_height: 1,
          },
          mergedidlbasefilename: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'MergedIDLBaseFileName': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          typelibraryfile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'TypeLibraryFile': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          typelibraryresourceid: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'TypeLibraryResourceID': '1',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
        },
      },
      vclinkertools_details: {
        button_index: {
          ja: 27
        },
        page_height: 526,
        descriptions: {
          entrypointsymbol: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'EntryPointSymbol': 'entry_point_symbol',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 0,
            },
            button_height: 1,
          },
          setchecksum: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/RELEASE)\n" + 
                "        'SetChecksum': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'SetChecksum': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 2,
            },
            button_height: 1,
          },
          baseaddress: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'BaseAddress': '0x400000',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 3,
            },
            button_height: 1,
          },
          randomizedbaseaddress: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # いいえ (/DYNAMICBASE:NO)\n" + 
                "        'RandomizedBaseAddress': '1',\n" + 
                "\n" + 
                "        # はい (/DYNAMICBASE)\n" + 
                "        'RandomizedBaseAddress': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 4,
            },
            button_height: 1,
          },
          fixedbaseaddress: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # いいえ (/FIXED:NO)\n" + 
                "        'FixedBaseAddress': '1',\n" + 
                "\n" + 
                "        # はい (/FIXED)\n" + 
                "        'FixedBaseAddress': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 5,
            },
            button_height: 1,
          },
          dataexecutionprevention: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # いいえ (/NXCOMPAT:NO)\n" + 
                "        'DataExecutionPrevention': '1',\n" + 
                "\n" + 
                "        # はい (/NXCOMPAT)\n" + 
                "        'DataExecutionPrevention': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 6,
            },
            button_height: 1,
          },
          turnoffassemblygeneration: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/NOASSEMBLY)\n" + 
                "        'TurnOffAssemblyGeneration': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'TurnOffAssemblyGeneration': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 7,
            },
            button_height: 1,
          },
          supportunloadofdelayloadeddll: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/DELAY:UNLOAD)\n" + 
                "        'SupportUnloadOfDelayLoadedDLL': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'SupportUnloadOfDelayLoadedDLL': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 8,
            },
            button_height: 1,
          },
          importlibrary: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'ImportLibrary': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 10,
            },
            button_height: 1,
          },
          mergesections: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'MergeSections': '.rdata=.text',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 11,
            },
            button_height: 1,
          },
          targetmachine: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # 設定なし\n" + 
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
              ]
            },
            button_index: {
              ja: 12,
            },
            button_height: 1,
          },
          profile: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/PROFILE)\n" + 
                "        'Profile': 'true',\n" + 
                "\n" + 
                "        # いいえ\n" + 
                "        'Profile': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 13,
            },
            button_height: 1,
          },
          clrthreadattribute: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # 既定のスレッド属性 (/CLRTHREADATTRIBUTE:NONE)\n" + 
                "        'CLRThreadAttribute': '0',\n" + 
                "\n" + 
                "        # MTA スレッド属性 (/CLRTHREADATTRIBUTE:MTA)\n" + 
                "        'CLRThreadAttribute': '1',\n" + 
                "\n" + 
                "        # STA スレッド属性 (/CLRTHREADATTRIBUTE:STA)\n" + 
                "        'CLRThreadAttribute': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 14,
            },
            button_height: 1,
          },
          clrimagetype: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # 既定のイメージ タイプ\n" + 
                "        'CLRImageType': '0',\n" + 
                "\n" + 
                "        # IJW イメージの強制 (/CLRIMAGETYPE:IJW)\n" + 
                "        'CLRImageType': '1',\n" + 
                "\n" + 
                "        # 純粋 IL イメージの強制 (/CLRIMAGETYPE:PURE)\n" + 
                "        'CLRImageType': '2',\n" + 
                "\n" + 
                "        # 安全 IL イメージの強制 (/CLRIMAGETYPE:SAFE)\n" + 
                "        'CLRImageType': '3',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 15,
            },
            button_height: 1,
          },
          keycontainer: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        'KeyContainer': 'a_file_name',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 17,
            },
            button_height: 1,
          },
          clrunmanagedcodecheck: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # はい (/CLRUNMANAGEDCODECHECK)\n" + 
                "        'CLRUnmanagedCodeCheck': 'true',\n" + 
                "\n" + 
                "        # いいえ (/CLRUNMANAGEDCODECHECK:NO)\n" + 
                "        'CLRUnmanagedCodeCheck': 'false',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 19,
            },
            button_height: 1,
          },
          errorreporting: {
            description: {
              ja: [
                "'targets': [\n" + 
                "  {\n" + 
                "    'msvs_settings': {\n" + 
                "      'VCLinkerTool': {\n" + 
                "        # エラー報告なし (/ERRORREPORT:NONE)\n" + 
                "        'ErrorReporting': '0',\n" + 
                "\n" + 
                "        # すぐにメッセージを表示 (/ERRORREPORT:PROMPT)\n" + 
                "        'ErrorReporting': '1',\n" + 
                "\n" + 
                "        # 次回ログインのためのキュー (/ERRORREPORT:QUEUE)\n" + 
                "        'ErrorReporting': '2',\n" + 
                "      },\n" + 
                "    }\n" + 
                "  }\n" + 
                "]\n",
              ]
            },
            button_index: {
              ja: 21,
            },
            button_height: 1,
          },
        },
      },
    }
  };

  var page_button_height = 20;
  var page_button_offset = 0;
  var description_button_distance = 21;
  var description_button_height = 19;
  var description_button_offset = 0;
  var config_panel_scale = 0.8;
  var page_width = 702;

  var load_contents = function(lang) {
    var $config_panel_background = $('.config_panel_background')
    $config_panel_background.attr('src', 'image/' + lang + '/config_panel.png');

    var $config_panel_contents_background_container = $('.config_panel_contents_background_container');
    $config_panel_contents_background_container.empty();

    $config_panel_contents_background = $('<img src="image/' + lang + '/listview.png" class="config_panel_contents_background"/>')
    $config_panel_contents_background_container.append($config_panel_contents_background);

    for (var page_key in gypcs.pages) {
      var page = gypcs.pages[page_key]
      var button_index = page.button_index[lang];
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
        var button_index = description.button_index[lang];
        var button_height = description.button_height;
        var top = (description_button_offset + button_index * description_button_distance) * config_panel_scale;
        var height = button_height * description_button_height * config_panel_scale;
        var $desc_div = $('<div data-gypcs-page="' + name + '" data-gypcs-description="' + description_title + '" class="description_select_button" style="top: ' + top + 'px; height: ' + height + 'px"></div>');
        $config_property.append($desc_div);
      }

      $config_properties.append($config_property);

      gypcs.language = lang;
    }
  };

  load_contents('ja');

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
      var contents = gypcs.pages[page].descriptions[description].description[lang];
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

  $('.description_select_button').click(function(event) {
    select_description_by_button($(event.target));
  });

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
  
  $('.page_select_button').click(function(event) {
    select_page_by_button($(event.target));
  });

  // select first page and description
  select_page_by_button($('.page_select_button').first());
  select_description_by_button($('.description_select_button').first());
});
