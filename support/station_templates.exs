# This file is used to define preset stations that
# are automatically started and have auto player servers
# started to play tracks from the sources.
# You should return an array of station templates, each must be a map
# with the following keys: name, tags, sources
# The sources map can have the keys ["playlist", "user", "track", "related"]
# Each source key can map to either a string or a list of strings

station_templates = [
  %{
    name: "Popular Hits",
    tags: [],
    sources: %{
      playlist: [
        "https://youtube.com/playlist?list=PL4fGSI1pDJn4IeWA7bBJYh__qgOCRMkIh",
        "https://youtube.com/playlist?list=PL4fGSI1pDJn5kI81J1fYWK5eZRl1zJ5kM"
      ]
    }
  },
  %{
    name: "Bubble POP!",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=RDCLAK5uy_lGEOjy5U8xV41C8_LyqNnAZKOH6sGyutI"
    }
  },
  %{
    name: "Happy Hip Hop",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=RDCLAK5uy_mkEwQuegHYB8_aAzBO8Q__6gGoaFblISw"
    }
  },
  %{
    name: "edm hits",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=RDCLAK5uy_npkiQvDU863KxBgX_eaYo-LCIuM3qZtqo"
    }
  },
  %{
    name: "classic pop",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=RDCLAK5uy_k4sXYMRc7kePx3BjjVv5z2fB1CePqvVDw"
    }
  },
  %{
    name: "next up",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=RDCLAK5uy_nPY2b4tMzpmW2HPDvr8YgN9BGu8TBDgAU"
    }
  },
  %{
    name: "popular hip hop",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=RDCLAK5uy_kNzdtZz5yF-crDDcYxlIDOju50Tyqnrig"
    }
  },
  %{
    name: "party time",
    tags: [],
    sources: %{
      playlist: [
        "https://youtube.com/playlist?list=RDCLAK5uy_l3XabTm3_hzKqB9XOpyJj2xYRO597H5eE",
        "https://youtube.com/playlist?list=RDCLAK5uy_nfs_t4FUu00E5ED6lveEBBX1VMYe1mFjk"
      ]
    }
  },
  %{
    name: "mellow",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=RDCLAK5uy_mPolD_J22gS1SKxufARWcTZd1UrAH_0ZI"
    }
  },
  %{
    name: "throwbacks",
    tags: [],
    sources: %{
      playlist: [
        "https://youtube.com/playlist?list=RDCLAK5uy_kN4eY_ibobGvCBwIJGEGpDjuwzYHIG_iE",
        "https://youtube.com/playlist?list=RDCLAK5uy_nvu_HUY0DPNpbB_V0moUfs9s5zABAF8xQ"
      ]
    }
  },
  %{
    name: "old country",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=RDCLAK5uy_kpxnNxJpPZjLKbL9WgvrPuErWkUxMP6x4"
    }
  },
  %{
    name: "TOP POP HITS",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=PL4fGSI1pDJn5kI81J1fYWK5eZRl1zJ5kM"
    }
  },
  %{
    name: "Hot Hip Hop",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=RDCLAK5uy_kNzdtZz5yF-crDDcYxlIDOju50Tyqnrig"
    }
  },
  %{
    name: "Hype Hip Hop",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=RDCLAK5uy_knmotk1evyMkjhlXW0cqvN05oUNtD6kJc"
    }
  },
  %{
    name: "Top Charts",
    tags: [],
    sources: %{
      playlist: "https://youtube.com/playlist?list=PL4fGSI1pDJn4IeWA7bBJYh__qgOCRMkIh"
    }
  }
]
